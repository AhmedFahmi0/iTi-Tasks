#!/bin/bash
## SCript accepts two numbers from command line as parameters, and prints out their addition,subtraction,multiplication and division results
## Parameters
##	1st parameter: 1st number
##	2nd parameter: 2nd number
## Exit codes
##	0: Success
##	1: Not enough parameters
##	2: Division by zero
##	3: NUM1 is not a number
##	4: NUM2 is not a number
## Check for parameters
[ ${#} -ne 2 ] && exit 1
## Assign values to custom variables
NUM1=${1}
NUM2=${2}

## Check for integer values
[ $(echo "${NUM1}" | grep -c "^\-\{0,1\}[0-9]*\.[0-9]*$") -ne 1 ] && exit 3
[ $(echo "${NUM2}" | grep -c "^\-\{0,1\}[0-9]*\.[0-9]*$") -ne 1 ] && exit 4

## Check for division by zero
[ ${2} == 0 ] || [ $[2] == "0.0" ] && exit 2

## Perform addition operation
ADDITION_RESULT=$(echo " ${NUM1} + ${NUM2} " | bc)

## Prints out the addition result
echo "Addition = ${ADDITION_RESULT}"

## Perform subtraction operation
SUBTRACTION_RESULT=$(echo "${NUM1} - ${NUM2}" | bc)
echo "Subtraction = ${SUBTRACTION_RESULT}"

## Perform multiplication operation
MULTIPLICATION_RESULT=$(echo "${NUM1} * ${NUM2}" | bc)

## Prints out the multiplication result
echo "Multiplication = ${MULTIPLICATION_RESULT}"

## Perform division operation
DIVISION_RESULT=$(echo "${NUM1} / ${NUM2}" | bc)

## Prints out the division result
echo "Division = ${DIVISION_RESULT}"

exit 0

