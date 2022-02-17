#Create a Casino with multiple types of Games. You will create a Player that has an amount of money that can wager on the different Games you created (Blackjack, Poker, Slots)
import random

class Person:
  def __init__(self, name, age):
    self.age = age
    self.name = name
    self.cash = 500

  def __repr__(self):
    return "{name}, you currently have {cash} dollars to gamble with.".format(name = self.name, cash = self.cash)

  def check_age(self):
    age_check = input("Hi, {name}! Before you gamble, we want to make sure you over 21. Are you over 21? yes or no?".format(name = self.name))
    if age_check == "yes":
      print("Great! Welcome to The Great Raimer Casino. We have gifted you {cash} dollars to start with, but feel free to use our complementary ATM.".format(name = self.name, cash = self.cash))
    else:
      print("Sorry, come back when you are 21.")
      
#   #this will add money to my wallet so I can gamble more
  def add_cash(self):
    dollars_added = float(input("{name}, how much much money would you like to withdraw? ".format(name = self.name)))
    self.cash += dollars_added
    return(self.cash)
    print(self.cash)

# #this will allow me to check my balance as I am playing so I don't run out 
  def check_balance(self):
    check_balance_statement = input("Would you like to check your balance now? ")
    if check_balance_statement == "yes":
      print("Your balance is: ")
      print(self.cash)
    else:
      print("Sounds good")



#blackjack
  def black_jack_game(self):
    print("The current buy in is 25 dollars.")
    print("You currently have " + str(self.cash) + " dollars in your wallet")
    buy_in_choice = input("would you like to continue? Yes or No?")
    if buy_in_choice != "yes":
      return
    self.cash -= 25
    print("Great! Lets Play Blackjack!")
    print("To play, you must pick a number between 1 and 10. If you pick the number you win 2x your bet! If you pick a number that is greater than the value chosen, you push.")
    ready_statement = input("Are you ready?")
    if ready_statement == "yes":
      dealer_number = random.randint(1,11)
      pick_a_number = float(input("Please pick a number between 1 and 10..."))
      if pick_a_number == dealer_number:
        print("You Win!")
        self.cash += 50
      elif pick_a_number >= dealer_number:
        print("You pushed")
        self.cash
      else: 
        print("You lost. Would you like to play again?")
    else:
      return 
    print("Your balance is now " + str(self.cash) + " , would you like to play again?")
    play_again = input("Yes or No?")
    if play_again == "yes":
      self.black_jack_game()
    else: 
      cash_out = input("Would you like to cash out?")
      if cash_out == "yes":
        print(self.cash)
      else: 
        return 


  def poker_game(self):
    print("The current buy in is 50 dollars.")
    print("You currently have " + str(self.cash) + " dollars in your wallet")
    buy_in_choice = input("would you like to continue? Yes or No?")
    if buy_in_choice == "yes":
      print("Great! Lets Play Poker!") 
    else:
     return 

#slots 

  def slots_game(self):
    print("The current buy in is 5 dollars.")
    print("You currently have " + str(self.cash) + " dollars in your wallet")
    buy_in_choice = input("would you like to continue? Yes or No?")
    if buy_in_choice != "yes":
      return
    self.cash -= 5
    print("Great! Lets Play Slots!")
    print("To play, just type \"spin\" on your keyboard to spin! Have fun.")
    ready_statement = input("Are you ready?")
    if ready_statement == "yes":
      dealer_number = random.randint(1,3)
      spin = input("The machine is ready for your spin")
      
      if spin == "spin":
        generated_number = random.randint(1,3)
        if generated_number == dealer_number:
          print("You Win!")
          self.cash += 20
        else: 
          print("You lost")
      else:
        return    
    else:
      return 
    print("Your balance is now " + str(self.cash) + " , would you like to play again?")
    play_again = input("Yes or No?")
    if play_again == "yes":
      self.slots_game()
    else: 
      cash_out = input("Would you like to cash out?")
      if cash_out == "yes":
        print(self.cash)
      else: 
        return 


#poker
  def poker_game(self):
    print("The current buy in is 50 dollars.")
    print("You currently have " + str(self.cash) + " dollars in your wallet")
    buy_in_choice = input("would you like to continue? Yes or No?")
    if buy_in_choice != "yes":
      return
    self.cash -= 50
    print("Great! Lets Play Poker!")
    print("To play, guess a number between 1 and 10. If you get it correct you win! If the number you guessed is less than the true value, you win only have the amount.")
    dealer_number = random.randint(1,11)
    choice = float(input("The machine is ready for your guess..."))
    if choice == dealer_number:
        print("You won 100 dollars!")
        self.cash += 100
    elif choice < dealer_number:
        print("You won 50 dollars!")
        self.cash += 50
    else: 
        print("You Lost")
  
    print("Your balance is now " + str(self.cash) + " , would you like to play again?")
    play_again = input("Yes or No?")
    if play_again == "yes":
      self.poker_game()
    else: 
      cash_out = input("Would you like to cash out?")
      if cash_out == "yes":
        print(self.cash)
      else: 
        return


  #choose game function 
  def choose_game(self):
    choice = input("We are currently offering three games to play: Blackjack, Poker, and Slots. Which one would you like to try?")
    if choice == "blackjack":
      self.black_jack_game()
    elif choice == "poker":
      self.poker_game()
    elif choice == "slots":
      self.slots_game()
    else:
      print("Oops, something went wrong")
      self.choose_game()

  


# #--------------------------------------------
name = input("Before we gamble, can I have your name? ")
age = input("Also, your age? ")
p2 = Person(name, age)
p2.check_age()
p2.add_cash()
p2.check_balance()
p2.choose_game()








  



