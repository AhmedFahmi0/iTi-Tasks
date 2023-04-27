# def reduce(x):
#     return set(x)
# print(reduce([1,2,3,3]))



#***********************************************************************************************************************************************************



# def front_back(a, b):
#     a_indx = int((len(a)+1)/2)
#     b_indx = int((len(b)+1)/2)
#     print(a[:a_indx] + b[:b_indx] + a[a_indx:] +b[b_indx:])
# front_back("first", "last")




#***********************************************************************************************************************************************************


# def check_similarity(*args):
#     if len(args)==len(set(args)):
#         return True
#     else:
#         return False
# print(check_similarity(1,2,1,4))



#***********************************************************************************************************************************************************


# def bubble_sort(numbers):
#     size=len(numbers)
#     temp=0
#     for j in range(size):
#         flag=0
#         for i in range(size-j-1):
#             if numbers[i]>numbers[i+1]:
#                 temp=numbers[i+1]
#                 numbers[i+1]=numbers[i]
#                 numbers[i]=temp
#                 flag=1
#         if flag==0:
#             break       
#     return numbers
# print(bubble_sort([500000,400,1,0,99,2000]))




#***********************************************************************************************************************************************************


# import random

# random_number=random.randint(0,100)
# print(random_number)
# i=0
# numbers=[]
# while i<10:
#     flag=0
#     entered_number=eval(input(f'Enter Number (Try Number {i+1}) \n'))
#     for j in range(len(numbers)):
#             if entered_number==numbers[j]:
#                 print("Hint:You Entered this number before")
#                 flag=1
#                 break
#     if entered_number>random_number and entered_number<=100 and flag==0:
#         print("Number is high")
#         numbers.append(entered_number)
#         i+=1
#         if i==10:
#             choice=eval(input("You finished your tries.Want to play again ?(1.Yes   2.No)"))
#             if choice==1:
#                 i=0
#     elif entered_number<random_number and entered_number>0 and flag==0:
#         print("Number is low")
#         numbers.append(entered_number)
#         i+=1
#         if i==10:
#             choice=eval(input("You finished your tries.Want to play again ?(1.Yes   2.No)\n"))
#             if choice==1:
#                 i=0
#     elif entered_number>100 or entered_number<0:
#          print("Number is out of bounds (choose a number between 0-100)")
#     elif entered_number==random_number:
#         print("Congratulations !!! number is correct")
#         random_number=random.randint(0,100)
# print(f"Entered numbers:{numbers}")



#***********************************************************************************************************************************************************
        





        






             
