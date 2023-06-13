class User
    @@name = "user"
    
    def initialize(name = nil)
      @name = name
    end
    
    def self.name
      @@name
    end
    
    def self.name=(name)
      @@name = name
    end
    
    def name=(name)
      @name = name
    end
    
    def name
      @name
    end
  end

  user1 = User.new("Alice")
puts user1.name # outputs "Alice"

user2 = User.new
puts user2.name # outputs nil

puts User.name # outputs "user"

User.name = "admin"
puts User.name # outputs "admin"

user1.name = "Bob"
puts user1.name # outputs "Bob"

# *******************************************************************************

class MyMath
    def calc(num1, num2, operator)
      raise ArgumentError.new("Invalid argument type: #{num1.class}") unless num1.is_a?(Numeric)
      raise ArgumentError.new("Invalid argument type: #{num2.class}") unless num2.is_a?(Numeric)
      raise ArgumentError.new("Operator cannot be empty") if operator.nil? || operator.empty?
      
      case operator
      when "+"
        result = num1 + num2
      when "-"
        result = num1 - num2
      when "*"
        result = num1 * num2
      when "/"
        raise ZeroDivisionError.new("Division by zero is not allowed") if num2 == 0
        result = num1 / num2
      else
        raise ArgumentError.new("Not supported operator: #{operator}")
      end
      
      result
    end
  end

  math = MyMath.new

puts math.calc(2, 3, "+") # outputs 5
puts math.calc(10, 5, "-") # outputs 5
puts math.calc(4, 5, "*") # outputs 20
puts math.calc(10, 2, "/") # outputs 5.0
puts math.calc(10, 0, "/") # raises ZeroDivisionError
puts math.calc(2, 3, "%") # raises ArgumentError
puts math.calc("2", 3, "+") # raises ArgumentError
puts math.calc(2, "", "+") # raises ArgumentError



# *******************************************************************************

require 'date'
module MyModule
    class Person
      attr_accessor :fname, :lname, :birth_date, :age
      
      def initialize(fname = "John", lname = "Doe", birth_date = "1970-01-01")
        @fname = fname
        @lname = lname
        @birth_date = Date.parse(birth_date)
        @age = calc_age
      end
      
      def get_person_data
        puts "Enter first name:"
        @fname = gets.chomp
        
        puts "Enter last name:"
        @lname = gets.chomp
        
        puts "Enter birth date in yyyy-mm-dd format:"
        @birth_date = Date.parse(gets.chomp)
        
        @age = calc_age
      end
      
      def welcome
        puts "Welcome, #{@fname} #{@lname}!"
        puts "You are #{@age} years, #{calc_months} months, and #{calc_days} days old."
      end
      
      private
      
      def calc_age
        now = Date.today
        age = now.year - @birth_date.year
        age -= 1 if now.month < @birth_date.month || (now.month == @birth_date.month && now.day < @birth_date.day)
        age
      end
      
      def calc_months
        now = Date.today
        months = (now.year * 12 + now.month) - (@birth_date.year * 12 + @birth_date.month)
        months -= 1 if now.day < @birth_date.day
        months
      end
      
      def calc_days
        now = Date.today
        (now - @birth_date).to_i
      end
    end
  end

person = MyModule::Person.new
person.get_person_data
person.welcome