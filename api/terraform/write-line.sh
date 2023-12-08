#!/bin/bash

# Check if the correct number of arguments is provided
if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <filename> <line_number> <string>"
    exit 1
fi

filename="$1"
line_number="$2"
string="$3"

# Check if the file exists
if [ ! -e "$filename" ]; then
    echo "Error: File '$filename' not found."
    exit 1
fi

# Check if the line number is valid
if ! [[ "$line_number" =~ ^[0-9]+$ ]]; then
    echo "Error: Line number must be a positive integer."
    exit 1
fi

# Write the string to the specified line in the file
awk -v line="$line_number" -v text="$string" '{
    if (NR == line) {
        print text
    } else {
        print
    }
}' "$filename" > "$filename.tmp" && mv "$filename.tmp" "$filename"

echo "String '$string' written to line $line_number in '$filename'."
