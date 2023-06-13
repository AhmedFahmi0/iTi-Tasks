# Task1
def multiple_string(str, n)
    return str*n
end
print multiple_string('a', 1),"\n"
print multiple_string('a', 2),"\n"


# Task2
def start_if(str)
    return str[0, 2] == "if";
end
print start_if("ifelse"),"\n"
print start_if("endif"),"\n"

# Task3
def front_back(txt)
    txt[-1] << txt[1...-1] << txt[0]
end
print front_back("Ruby"),"\n"
print front_back("Great"),"\n"


# Task4
def last_char(str)
	return (str[-1] + str + str[-1]);
end
print last_char("ab c"),"\n"
print last_char("abc d"),"\n"

# Task5
year = [2012, 1500, 1600, 2020]
year.each do |y|
  if y % 400 == 0
  	 puts y.to_s + ' is leap year'
    elsif y % 4==0 && y % 100 != 0 
      puts y.to_s + ' is leap year'
  else  puts y.to_s + ' is not leap year'
  end
end

# Task6
def check_array(nums)
    rotated = nums.rotate()
	return rotated;
end
print check_array([1, 2, 5]),"\n" 




# Task7
def check_array(nums)
    sum = 0
    i = 0
    while i < nums.length
            if(nums[i] == 17)
             i= i + 1
         else
                sum = sum + nums[i]
         end
         i += 1
     end
        return sum
 end
 print check_array([3, 5, 17, 6]),"\n"

 

