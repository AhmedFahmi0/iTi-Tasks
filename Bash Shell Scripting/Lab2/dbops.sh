source checker.sh
 
function authenticate {
	echo "Authentication.."
}

function querystudent {
	echo "Now query"
	echo -n "Enter student name to query GPA : "
	read NAME
	##We want to get line from datafile starts with NAME followed by :
	LINE=$(grep "^${NAME}:" datafile)
	if [ -z ${LINE} ]
	then
		echo "Error, student name ${NAME} not found"
	else
		GPA=$(echo ${LINE} | awk ' BEGIN { FS=":" } { print $2 } ')
		echo "GPA for ${NAME} is ${GPA}"
	fi
}

function insertstudent {
	echo "Inserting a new student"
	echo -n "Enter name : " 
	read NAME
	echo -n "Enter GPA : "
	read GPA
	checkFloatPoint ${GPA}
	if [ ${?} -ne 0 ]
	then
		echo "the GPA that you enter is not positive floating number"
	else
		echo "${NAME}:${GPA}" >> datafile
	fi
		
}

function deletestudent {
	echo "Deleting an existing student"
	echo -n "Enter student to delete : "
	read NAME
	##We want to get line from datafile starts with NAME followed by :
        LINE=$(grep "^${NAME}:" datafile)
        if [ -z ${LINE} ]
        then
                echo "Error, student name ${NAME} not found"
        else
		##Before delete, print confirmation message to delete or no
		echo -n "are you sure that you want to delete this student? [y/n]: "
		read CONFIRM
		if [ "${CONFIRM}" == "y" ]
		then
		##-v used to get lines DOES NOT contain regex
			grep -v "^${NAME}:" datafile > /tmp/datafile
			cp /tmp/datafile datafile
			rm /tmp/datafile
		fi
        fi
}

function updatestudent {
	echo "Updating an existing student"
	echo -n "Enter student name  : "
	read NAME
	##We want to get line from datafile starts with NAME followed by :
	LINE=$(grep "^${NAME}:" datafile)
	if [ -z ${LINE} ]
	then
		echo "Error, student name ${NAME} not found"
	else
		echo -n "Enter GPA : "
		read GPA
		### Before adding, we want to check GPA valid floating point or no
		checkFloatPoint ${GPA}
		if [ ${?} -ne 0 ]
		then
			echo "the GPA that you enter is not positive floating number"
		fi
		# Update the line in the file
		OLD_GPA=$(grep -n "^${NAME}:" "datafile" | cut -d ':' -f3)
		sed -i "s/${OLD_GPA}/${GPA}/g" datafile
		# Find the line number of the matching pattern
	fi
}

