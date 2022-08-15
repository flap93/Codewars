# Complete the function that takes two integers (a, b, where a < b) 
# and return an array of all integers between 
# the input parameters, including them.

# For example:

# a = 1
# b = 4
# --> [1, 2, 3, 4]


#//// SOLUTION 1

#  creamos un array vacio donde haremos un loop 
#  que recorra desde a hasta b segun los parametros
#  que tengamos , hacemos un push del array a nuestro 
#  array vacio para almacenar los datos
def between(a, b)
  arr = []

  for i in a..b
    arr.push(i)
  end
  arr
end

p between(5, 10)

#// SOLUTION 2
# recorre a hasta b y lo convierte en un array

def between(a, b)
  
  (a..b).to_a 
end

p between(5, 10)

#SOLUTION 3

def between(a, b)
  
  [*a..b]
end

p between(5, 10)

#SOLUTION 4

# si a es menor que b entonces recorre a hasta b
# y metelo en un array sino no hagas nada (false)

def between(a, b)
  a < b ? (a..b).to_a : false
end

p between(5, 10)