terraform {
  required_version = ">= 1.2.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  # backend "s3" {
  #   bucket = "palpie-terraform-state"
  #   key    = "terraform.tfstate"
  #   region = "sa-east-1"
  # }
}

provider "aws" {
  region = "sa-east-1"
}

data "aws_vpc" "default" {
  default = true
}

resource "aws_key_pair" "aws-palpie" {
  key_name = "aws-palpie"
  # ssh-keygen -t rsa -f aws-palpie
  public_key = file("./aws-palpie.pub")
}

resource "aws_security_group" "palpie-postgres-sg" {
  name   = "palpie-postgres-sg"
  vpc_id = data.aws_vpc.default.id

  ingress {
    protocol    = "tcp"
    from_port   = 22
    to_port     = 22
    cidr_blocks = ["0.0.0.0/0"]
    # cidr_blocks = [aws_security_group.palpie-api-sg]
  }

  ingress {
    protocol    = "tcp"
    from_port   = 5432
    to_port     = 5432
    cidr_blocks = ["0.0.0.0/0"]
    # cidr_blocks = [aws_security_group.palpie-api-sg]
  }

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "palpie-postgres-sg"
  }
}

resource "aws_instance" "palpie-postgres" {
  ami                    = "ami-05dc908211c15c11d"
  instance_type          = "t2.micro"
  key_name               = "aws-palpie"
  vpc_security_group_ids = [aws_security_group.palpie-postgres-sg.id]
  user_data              = file("./install-postgres.sh")
  tags = {
    Name = "palpie-postgres"
  }
}

resource "aws_security_group" "palpie-api-sg" {
  name   = "palpie-api-sg"
  vpc_id = data.aws_vpc.default.id

  ingress {
    protocol    = "tcp"
    from_port   = 80
    to_port     = 80
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol = "tcp"
    from_port = 22
    to_port = 22
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "palpie-api-sg"
  }
}

resource "aws_instance" "palpie-api" {
  ami                    = "ami-05dc908211c15c11d"
  instance_type          = "t2.micro"
  key_name               = "aws-palpie"
  vpc_security_group_ids = [aws_security_group.palpie-api-sg.id]
  user_data              = templatefile("./install-palpie-api.sh", {
    palpie_postgres_host = aws_instance.palpie-postgres.public_dns
  })
  tags = {
    Name = "palpie-api"
  }
}

resource "aws_security_group" "palpie-app-sg" {
  name   = "palpie-app-sg"
  vpc_id = data.aws_vpc.default.id

  ingress {
    protocol    = "tcp"
    from_port   = 80
    to_port     = 80
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol = "tcp"
    from_port = 22
    to_port = 22
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "palpie-app-sg"
  }
}

resource "aws_instance" "palpie-app" {
  ami                    = "ami-05dc908211c15c11d"
  instance_type          = "t2.micro"
  key_name               = "aws-palpie"
  vpc_security_group_ids = [aws_security_group.palpie-app-sg.id]
  user_data              = templatefile("./install-palpie-app.sh", {
    palpie_api_host = aws_instance.palpie-api.public_dns
  })
  tags = {
    Name = "palpie-app"
  }
}

output "palpie-postgres-host" {
  value = aws_instance.palpie-postgres.public_dns
}

output "palpie-api-host" {
  value = aws_instance.palpie-api.public_dns
}

output "palpie-app-host" {
  value = aws_instance.palpie-app.public_dns
}
