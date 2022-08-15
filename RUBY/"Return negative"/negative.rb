#? In this simple assignment you are given a number and
#? have to make it negative. But maybe the number is already negative?
?
#? Examples
#? makeNegative(1);  # return -1
#? makeNegative(-5); # return -5
#? makeNegative(0);  # return 0
#? Notes
#? The number can be negative already, in which case no change is required.
#? Zero (0) is not checked for any specific sign. Negative zeros make
#?  no mathematical sense.


#!SOLUTION 1
#* si el numero positivo retorname el numero
#* multiplicado por -1
#* sino dame el numero 

def makeNegative(num)
  if num.positive?
    num * -1
  else
    num
  end
end

p makeNegative(9)



#!SOLUTION 2


def makeNegative(num)
  -num.abs
end

p makeNegative(8)




#//SOLUTION 3

# si num es mayor es positvo retorname num Negative sino dame num 

def makeNegative(num)
  num.positive? ? -num : num
end

p makeNegative(10)





select
gsub  ( remplace words)
to_a
to_i
split
count 
empty?
sum
length
positive?
include?


name.split.map { |s| s}

def greet(name)
  if name == 'Johnny'
    return "Hello, my love!"
  else
    return "Hello, #{name}!"
  end
end

def opposite(value)
  value * -1
 end


#  https://www.rubyguides.com/2020/05/ruby-hash-methods/

# javascript

# function abbrevName(name){

#     // code away
#   let [first, last] = name.split(' ')
  
#   return `${first[0].toUpperCase()}.${last[0].toUpperCase()}`

# }
