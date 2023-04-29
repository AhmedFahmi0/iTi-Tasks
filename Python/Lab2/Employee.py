import mysql.connector
from getpass import getpass

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database='northwind'
)
cur = mydb.cursor()
cur.execute('''drop table if exists employees''')
cur.execute('''create table employees(
            ID int primary key not null,
            first_name text not null,
            last_name text not null,
            age int not null,
            department char(50) not null,
            salary int not null,
            managed_department char(50)
            );''')
mydb.commit()
# mydb.close()

class Employee:
    all_employees=[]
    id=0

    @classmethod
    def list_employees(cls):
         for employee in Employee.all_employees:
             employee.show()
             print("\n")
             
    

    def __init__(self, first_name, last_name, age, department, salary):
       self.first_name = first_name
       self.last_name = last_name
       self.age = age
       self.department=department
       self.salary = salary
       Employee.all_employees.append(self)
       Employee.id+=1
       cur.execute(f'''Insert into employees(ID, first_name, last_name, age, department, salary)
             values({Employee.id}, '{self.first_name}', '{self.last_name}', {self.age}, '{self.department}', {self.salary})
             ''')
       mydb.commit()
       

    def transfer(self,new_department):
        self.department=new_department
    
    def fire(self):
        Employee.all_employees.remove(self)

    def show(self):
        print(f"""
        First Name:{self.first_name}
        Last Name:{self.last_name}
        Age:{self.age}
        Department:{self.department}
        Salary:{self.salary}""")

class Manager(Employee):
     def __init__(self, first_name, last_name, age, department, salary, managed_department):
         Employee.__init__(self, first_name, last_name, age, department, salary)
         self.managed_department=managed_department
         cur.execute(f"Update employees set managed_department='{self.managed_department}' where ID={Employee.id}")
         mydb.commit()
     def show(self):
         print(f"""
        First Name:{self.first_name}
        Last Name:{self.last_name}
        Age:{self.age}
        Managed Department:{self.managed_department}
        Salary:Confidential""")
    


ahmed=Employee("Ahmed","Fahmi",27,"Backend",10000)
omar=Employee("Omar","Fahmi",35,"Backend",20000)
mohammed=Employee("Mohammed","Fahmi",29,"Backend",13000)
ali=Employee("Ali","Fahmi",22,"Backend",7000)
MrMustafa=Manager("Mustafa","Shawky", 50, "Finance", 50000,"Finance")
Employee.list_employees()
mohammed.fire()
ahmed.show()
ahmed.transfer("Frontend")
ahmed.show()
Employee.list_employees()
MrMustafa.show()
MrMustafa.fire()
Employee.list_employees()