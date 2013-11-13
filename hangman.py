import random
# triple quotes imports everything 
HANGMANPICS = ['''  

  +---+
  |   |
      |
      |
      |
      |
=========''', '''

  +---+
  |   |
  O   |
      |
      |
      |
=========''', '''

  +---+
  |   |
  O   |
  |   |
      |
      |
=========''', '''

  +---+
  |   |
  O   |
 /|   |
      |
      |
=========''', '''

  +---+
  |   |
  O   |
 /|\  |
      |
      |
=========''', '''

  +---+
  |   |
  O   |
 /|\  |
 /    |
      |
=========''', '''

  +---+
  |   |
  O   |
 /|\  |
 / \  |
      |
=========''']
words = 'ant baboon badger bat bear beaver camel cat clam cobra cougar coyote crow deer dog donkey duck eagle ferret fox frog goat goose hawk lion lizard llama mole monkey moose mouse mule newt otter owl panda parrot pigeon python rabbit ram rat raven rhino salmon seal shark sheep skunk sloth snake spider stork swan tiger toad trout turkey turtle weasel whale wolf wombat zebra'.split()

def getRandomWord(wordList):
    # This function returns a random string from the passed list of strings.
    wordIndex = random.randint(0, len(wordList) - 1) # wordIndex a random number in the length of wordList
    return wordList[wordIndex] # returns word at that location in the list 

def displayBoard(HANGMANPICS, missedLetters, correctLetters, secretWord):
    print(HANGMANPICS[len(missedLetters)])
    print()
# prints out a line saying "Missed letters: " and lists them, without starting a new line, until the last print()
    print('Missed letters:', end=' ' ) # in python2.x, dont need the end=" " that was there in example 
    for letter in missedLetters: # goes through each letter in th string 
        print(letter, end=' ' ) # prints each letter, with a space in between 
    print()

    blanks = '_' * len(secretWord) # puts all blanks down 

    for i in range(len(secretWord)): # replace blanks with correctly guessed letters
        if secretWord[i] in correctLetters:
            blanks = blanks[:i] + secretWord[i] + blanks[i+1:] # puts blanks before and after a correct letter, loops until filled

    for letter in blanks: # show the secret word with spaces in between each letter
        print(letter, end=' ')
    print()
def getGuess(alreadyGuessed):
    # Returns the letter the player entered. This function makes sure the player entered a single letter, and not something else.
    while True:
        print('Guess a letter.')
        guess = input() # this is where the player actually enters the guess 
        guess = guess.lower()
        if len(guess) != 1:
            print('Please enter a single letter.')
        elif guess in alreadyGuessed:
            print('You have already guessed that letter. Choose again.')
        elif guess not in 'abcdefghijklmnopqrstuvwxyz':
            print('Please enter a LETTER.')
        else:
            return guess

def playAgain():
    # This function returns True if the player wants to play again, otherwise it returns False.
    print('Do you want to play again? (yes or no)')
    return input().lower().startswith('y')
 

print('H A N G M A N')
missedLetters = ''
correctLetters = ''
secretWord = getRandomWord(words)
gameIsDone = False # initial assumption set 

while True:
    displayBoard(HANGMANPICS, missedLetters, correctLetters, secretWord)

    # Let the player type in a letter.
    guess = getGuess(missedLetters + correctLetters) # missed + correct = alreadyGuessed

    if guess in secretWord:
        correctLetters = correctLetters + guess 

        # This is only to check if the player has won after every entry that's right 
        foundAllLetters = True # start with the assumption that we've found all letters
        for i in range(len(secretWord)):
            if secretWord[i] not in correctLetters:
                foundAllLetters = False  # this is where the initial assumption is then changed, made True again every time the Hangman function is run 
                break
        if foundAllLetters: #if it remains true to the assumption.. 
            print('Yes! The secret word is "' + secretWord + '"! You have won!')
            gameIsDone = True # reverses the initial assumption stated at beginning
    else:
        missedLetters = missedLetters + guess # this is where missedLetters is generated 

        # Check if player has guessed too many times and lost
        if len(missedLetters) == len(HANGMANPICS) - 1:
            displayBoard(HANGMANPICS, missedLetters, correctLetters, secretWord)
            print('You have run out of guesses!\nAfter ' + str(len(missedLetters)) + ' missed guesses and ' + str(len(correctLetters)) + ' correct guesses, the word was "' + secretWord + '"')
            gameIsDone = True 

    # Ask the player if they want to play again (but only if the game is done).
    if gameIsDone:
        if playAgain():
            missedLetters = ''
            correctLetters = ''
            gameIsDone = False
            secretWord = getRandomWord(words)
        else:
            break
