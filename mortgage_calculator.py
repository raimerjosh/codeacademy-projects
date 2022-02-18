#Mortgage Calculator

class Mortgage:
    def __init__(self, down_payment, home_price, interest_rate, mortgage_term):
        self.p = down_payment
        self.hp = home_price
        self.i = interest_rate
        self.term = mortgage_term
        self.monthly_payment = 0


    def mortgage_calculator(self):
        principal = self.hp - self.p
        numerator = self.i*(1+self.i)**self.term
        denomenator = ((1+self.i)**self.term) - 1
        self.monthly_payment = int(principal * (numerator / denomenator))

        print("Your monthly mortgage payment with be $" + str(self.monthly_payment) + ".")




def calculate_again():
    print("Let's calculate what your monthly payment will be! ")
    home_price = float(input("What is the home price you are interested in? " ))
    down_payment = float(input("How much are you putting down? "))
    interest_rate = float(input("What interest rate are you approved for? "))/12
    mortgage_term = float(input("How many years is the mortage term? ")) *12

    p1 = Mortgage(down_payment, home_price, interest_rate, mortgage_term)

    p1.mortgage_calculator()

    print("Would you like to calculate your monthly mortgage price again?")
    again = input("y/n:")
    if again == "y" or again == "yes":
        calculate_again()
    else:
        print("Ok, have a good day!")

calculate_again()
