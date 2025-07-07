const tasks = [
    {
    type: "text",
    instruction: "Correct the one mistake in the phrase.",
    sentence: "Norway has a 25 year statute of limitation on murder. This means if the murder happened more than 25 years ago, he cannot be charged.",
    correct: "they"
  },
  {
    type: "text",
    instruction: "Correct the one mistake in the phrase.",
    sentence: "Italy built an entire courthouse to prosecute the Mafia.They charged 474 members in a trial that lasted from 1986-1992. To date, it was the most biggest trial in the world.",
    correct: "most"
  },
  {
    type: "text",
    instruction: "Correct the one mistake in the phrase.",
    sentence: "Julius Caesar's only son, Caesarion, was the last Pharaoh of Egypt. Even although Cleopatra swears, he is Caesar’s son, Caesar never officially acknowledged him.",
    correct: "though"
  },
  {
    type: "text",
    instruction: "Correct the one mistake in the phrase.",
    sentence: "Standing around burns calories. On average, a 150 pound person burns 114 calories per hours while standing and doing nothing.",
    correct: "hour"
  },
  {
    type: "text",
    instruction: "Correct the one mistake in the phrase.",
    sentence: "There is a town in Nebraska calls Monowi with a population of one. The only resident is a woman who is the Mayoress, Bartender and Librarian.",
    correct: "called"
  },
  {
    type: "text",
    instruction: "Correct the one mistake in the phrase.",
    sentence: "New Jersey had 4 Governors in the span of 8 days in early 2002. The shortest term of those were served by John Farmer Jr. for 90 minutes.",
    correct: "was"
  },
  {
    type: "text",
    instruction: "Correct the one mistake in the phrase.",
    sentence: "Cutting wires is the last resort when defusing a bomb? The last resort to defusing a bomb is often to send a robot in and shoot the bomb until it ___ falls apart or it explodes in a safe and covered area.",
    correct: "either"
  },
  {
    type: "text",
    instruction: "Correct the one mistake in the phrase.",
    sentence: "In 18th century England, having a pineapple was a symbol of wealth because of high import fees. They would be used like displays instead of being eaten.",
    correct: "as"
  },
  {
    type: "text",
    instruction: "Correct the one mistake in the phrase.",
    sentence: "Soviet Russia needed lighthouses on their uninhabited Northern Coast, but they built automated lighthouses powered by small nuclear reactors.",
    correct: "so"
  },
  {
    type: "text",
    instruction: "Correct the one mistake in the phrase.",
    sentence: "The largest stadium in the world is the Rungrado 1st of May Stadium in North Korea. It can hold up to 114,000 spectators. It cover 51 acres and is 197 feet tall.",
    correct: "covers"
  },
  {
    type: "text",
    instruction: "Correct the one mistake in the phrase.",
    sentence: "The United States Department of Agriculture says the official definition of a sandwich is: “at least 35% cooked meats and no more than 50 percent bread”.",
    correct: "meat"
  },
  {
    type: "text",
    instruction: "Correct the one mistake in the phrase.",
    sentence: "Sunflowers can help clean radioactive soil. Japan is using this to rehabilitate Fukashima. Almost 10,000 packets of sunflower seeds have been sell to the peopleof the city.",
    correct: "sold"
  },
  {
    type: "text",
    instruction: "Correct the one mistake in the phrase.",
    sentence: "The entire world population could fit at Texas allotting 330 square feet per person. The area of Texas is about 262,000 square miles.",
    correct: "in"
  },
  {
    type: "text",
    instruction: "Correct the one mistake in the phrase.",
    sentence: "The 1831 London Bridge was sold in 1962 when it needed to be replaced. It was bought by Lake Havasu City, Arizona, for to help tourism.",
    correct: "for"
  },
  {
    type: "text",
    instruction: "Correct the one mistake in the phrase.",
    sentence: "Selfies now cause more deaths than shark attacks. It is estimated they are 28 selfies related to deaths per year, with the leading cause being heights.",
    correct: "there"
  },
  {
    type: "text",
    instruction: "Correct the one mistake in the phrase.",
    sentence: "English accounts for 50% of visited webpages, even so the amount of English users is only 26%. Russian accounts for the 2nd most visiting pages at only 6%.",
    correct: "visited"
  },
  {
    type: "text",
    instruction: "Correct the one mistake in the phrase.",
    sentence: "Honey, and items immersed in honey, can be preserved since centuries The long shelf life is due to an enzyme foundin the stomachs of bees.",
    correct: "for"
  },
  {
    type: "text",
    instruction: "Correct the one mistake in the phrase.",
    sentence: "In 1937, a major fire broke out at the Fox Film studios in New Jersey. The fire destroyed 75% of their movies, includes most of their silent films.",
    correct: "including"
  },
  {
    type: "text",
    instruction: "Correct the one mistake in the phrase.",
    sentence: "When Jay-Z was 12, he shot his older brother in the shoulder to stealing his jewellery. He later referenced it in a song, titled “You Must Love Me.”",
    correct: "for"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "The motto on the United Kingdom’s Royal Coat of Arms is in French. The motto is “Dieu et mon droit”, that means “God and my right”.",
    "correct": "which"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Bees actually have knees. The expression comes from the fact that they store large build ups of pollen in hairy baskets on its knees.",
    "correct": "their"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "f you eat nothing but rabbit meat, you would die from protein poisoning. This would be a mixture of too much protein and an absence of fat in the diet.",
    "correct": "ate"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Madagascar got its name when Marco Polo misspelled it. A name stuck and the island was christened to the name in 1500.",
    "correct": "The"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Around 15% of active Twitter accounts are social bots.This means there are nearly 48 million accounts that are not controlled for humans.",
    "correct": "by"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Animal Planet aired two fake documentaries that “proved” mermaids exist. So much people thought it was real that the U.S. government issued an official statement about it.",
    "correct": "many"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "The Buddha commonly depicted in statues and pictures is a different person entirely. The real Buddha was actually incredibly skinny because to self-deprivation.",
    "correct": "of"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Lake Superior contains 10% of the world's freshwater. There is the size of South Carolina, and contains 2,900 cubic miles of water.",
    "correct": "it"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Even though smoking has been banned on airplanes, ash trays are mandatory on every plane. This is for save disposal in case someone breaks the law.",
    "correct": "safe"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Both U.S. and Soviet militaries have trained dolphins. They can be used for rescuing lose naval swimmers and locating underwater mines.",
    "correct": "lost"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Four of the top seven highest grossing films of every time were released in 2015. Avengers: Age of Ultron, Furious 7, Jurassic World and Star Wars: The Force Awakens.",
    "correct": "all"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "If the electors of the Holy Roman Emperor did not vote within 30 days, they were only allowed to eat bread and waters, and forbidden to leave the city.",
    "correct": "water"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "One horse can have approximately 15 horsepower. Horsepower is about 746 watts. The term is coined in the later 18th Century.",
    "correct": "was"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "n the 1980’s, the founder of Pringles, Fredric Baur, requested to be buried in a Pringles can. Their children honored the request.",
    "correct": "His"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "The only window that opens on the presidential car is the driver’s window, to pay tolls. It also has not keyholes, and only the Secret Service know how to open the doors.",
    "correct": "no"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Cold showers have more health benefits than hot or warm showers. This include improving circulation, stimulating weight loss, and easing depression.",
    "correct": "These"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Bubble wrap was original invented to be wallpaper. The creators tried to make plastic wallpaper with a paper backing, but it came out with plastic backing.",
    "correct": "originally"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Over 290 people have died climbing Mount Everest since 1922. Most deads occur because of avalanches, and not all bodies have been recovered.",
    "correct": "deaths"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "All the paint on the Eiffel Tower weighs the same as ten elephants. It gets repainted all seven years without closing to the public.",
    "correct": "every"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "The youngest Pope in history was Pope Benedict IX who was 11 years old at the time of election. He is also the unique person to have been the Pope more than once.",
    "correct": "only"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Paul McCartney was only paid £1 for performing at the 2012 London Olympics Closing Ceremonies. He willingly donated his actuation.",
    "correct": "performance"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "For nearly 60 years, Texas didn't have an official state flag between 1879 & 1933. For that time, the Lone Star flag was the active, but unofficial flag.",
    "correct": "During"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Though most think it’s Italian, pepperoni is an American invention. The once use of the word dates back to 1919.",
    "correct": "first"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "An estimated 50% of all gold never mined on Earth came from a single plateau in South Africa: Witwatersrand.",
    "correct": "ever"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "All new FBI special agencies and intelligence analysts are required to visit the United States Holocaust Memorial Museum.",
    "correct": "agents"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "There are 30 times more trees on Earth than there are starts in the Milky Way. It’s estimated that there are 100 billion stars, and 3 trillion trees.",
    "correct": "stars"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "The thumbs up sign is believed to had originated from Chinese pilots. It was used to communicate with the ground crew before take-off.",
    "correct": "have"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Volvo invented the three-point seatbelt, then gave the invention away for free. They decided it was too important of an invention to keep to themself.",
    "correct": "themselves"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "It takes longer to drown in saltwater than in freshwater. Due for this, around 90% of drownings occur in freshwater.",
    "correct": "to"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Baltimore is the largest independent city in the U.S. with a population of 621,849. Meaning, it is not part of no county.",
    "correct": "any"
  },
    {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Harry Potter and the Prisoner of Azkaban is the only film in the serie not in the 50 highest-grossing films list.",
    "correct": "series"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Arizona driver’s licenses don’t expire until you’re 65. You then have to renow in person every five years.",
    "correct": "renew"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "In generally, people tend to read as much as 10% slower from a screen than from paper.",
    "correct": "general"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Rabbits can be literally “scary to death” if approached by a predator when they are totally unaware.",
    "correct": "scared"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "The same brain cycles that occur when asleep, still happen when you’re woken, but in smaller sections. Meaning, parts of your brain are always “falling asleep”.",
    "correct": "awake"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "The Lion King was originally called “King of the Jungle” before they realised that lions don’t actually live at jungles.",
    "correct": "in"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Several African countries don’t like second-hand clothes be imported to their countries because it is destroying their local textiles industry.",
    "correct": "being"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "NASA stands from “National Aeronautics and Space Administration”.",
    "correct": "for"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Every day in the U.S., more than 100,000 persons get a speeding ticket.",
    "correct": "people"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Airport runaway numbers actually indicate direction on a compass.",
    "correct": "runway"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Suriphobia is the fear of mouses.",
    "correct": "mice"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "December 12th is Ding-A-Ling Day - a day to call friends and family that you haven't spoken to in a time.",
    "correct": "while"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "There are more volcanoes on Venus than any other planets within our sun system.",
    "correct": "solar"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Japanese people rarely leave rubbish on the streets. Being a result, Japan doesn't need janitors.",
    "correct": "As"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Northern Korean people are legally only allowed to have one of 28 haircuts. Men and women can choose between 14 different styles.",
    "correct": "from"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "The closest life relatives of hippopotamuses are whales, dolphins and porpoises.",
    "correct": "living"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "The Great Wall of Chinese is 5999,63 kms long.",
    "correct": "China"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Antarctica is the only continent that turtles don't live in.",
    "correct": "on"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Warren Buffett eats at McDonald's every single morning and only orders one of three thing. It never costshim more than $3.17.",
    "correct": "things"
  },
  {
    "type": "text",
    "instruction": "Correct the one mistake in the phrase.",
    "sentence": "Hard cheeses have the longer shelf life than soft cheeses.",
    "correct": "a"
  },
   {
    type: "audio",
    instruction: "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    sentence: "Jupiter completes a rotation of the Sun every 11.86 years.",
    audio: "id_002.WAV",
    correct: "Jupiter"
  },
  {
    type: "audio",
    instruction: "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    sentence: "Using a hands-free device to talk on the phone while driving is shown to be equally or more dangerous than driving drunk.",
    audio: "id_003.WAV",
    correct: "while"
  },
  {
    type: "audio",
    instruction: "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    sentence: "Even a small amount of alcohol placed on a scorpion will make it go crazy and sting itself to death.",
    audio: "id_004.WAV",
    correct: "placed"
  },
  {
    type: "audio",
    instruction: "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    sentence: "The Monster in Frankenstein was never actually named, though the Monster itself proposed the name“Adam”.",
    audio: "id_005.WAV",
    correct: "though"
  },
  {
    type: "audio",
    instruction: "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    sentence: "The first spacecraft to visit Mars was Mariner 4 in 1965.",
    audio: "id_006.WAV",
    correct: "spacecraft"
  },
  {
    type: "audio",
    instruction: "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    sentence: "The front paws of a cat are different from the back paws. They have five toes on the front but only four on the back.",
    audio: "id_007.WAV",
    correct: "toes"
  },
  {
    type: "audio",
    instruction: "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    sentence: "The word “barbarian” originally referred to people who don't speak Greek. The Greeks thought people who spoke a foreign tongue sounded like they were saying “barbar bar” all the time.",
    audio: "id_008.WAV",
    correct: "tongue"
  },
  {
    type: "audio",
    instruction: "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    sentence: "A group of horses will not go to sleep at the same time - at least one of them will stay awake to look out for the others.",
    audio: "id_009.WAV",
    correct: "out"
  },
  {
    type: "audio",
    instruction: "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    sentence: "Alongside Sudoku, chess has been named as one of the best ways to improve the mind and the memory.",
    audio: "id_010.WAV",
    correct: "mind"
  },
  {
    type: "audio",
    instruction: "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    sentence: "Jellyfish are considered biologically immortal. They don't age and will never die unless they are killed.",
    audio: "id_011.WAV",
    correct: "Jellyfish"
  },
  {
    type: "audio",
    instruction: "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    sentence: "Extreme ironing is a sport in which people take ironing boards to remote locations and iron items of clothing. It originated in England.",
    audio: "id_012.WAV",
    correct: "items"
  },
  {
    type: "audio",
    instruction: "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    sentence: "The longer you spend dating somebody before marrying, the less likely the marriage is to end in divorce.",
    audio: "id_013.WAV",
    correct: "less"
  },
  {
    type: "audio",
    instruction: "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    sentence: "It costs almost $290,000 per year in fees to run a hotdog cart near the Central Park Zoo in New York City.",
    audio: "id_014.WAV",
    correct: "costs"
  },
  {
    type: "audio",
    instruction: "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    sentence: "Contrary to popular belief, only 45% of the London Metro is actually under the ground.",
    audio: "id_015.WAV",
    correct: "ground"
  },
  {
    type: "audio",
    instruction: "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    sentence: "In the U.S., overwhelmingly red states have the highest rate of dog ownership while residents of blue states are more likely to keep a cat as a pet.",
    audio: "id_016.WAV",
    correct: "highest"
  },
  {
    type: "audio",
    instruction: "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    sentence: "15% of iPhone users use an iPhone with a broken screen.",
    audio: "id_017.WAV",
    correct: "use"
  },
  {
    type: "audio",
    instruction: "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    sentence: "The EU didn't want to showcase any country over another, so the architecture on each EU banknote was created by a computer to make neutral designs.",
    audio: "id_018.WAV",
    correct: "country"
  },
  {
    type: "audio",
    instruction: "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    sentence: "Elephants can die of a broken heart if their mate dies.",
    audio: "id_019.WAV",
    correct: "heart"
  },
  {
    type: "audio",
    instruction: "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    sentence: "Celebrity chef Jamie Oliver has such severe dyslexia that he didn’t read his first novel until he was 38.",
    audio: "id_020.WAV",
    correct: "chef"
  },
    {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "The collective name for a group of unicorns is called a blessing.",
    "audio": "id_021.WAV",
    "correct": "called"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "In Halden prison in Norway, guards are encouraged to interact, play sports, and eat with the inmates. This is to prevent aggression and create a sense of family.",
    "audio": "id_022.WAV",
    "correct": "guards"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "The Danish flag is the oldest current flag of a sovereign state. It was adopted in 1370 or earlier. The second oldest is Netherlands at 1572.",
    "audio": "id_023.WAV",
    "correct": "current"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "Medical errors are the 6th leading cause of the death in the U.S.",
    "audio": "id_024.WAV",
    "correct": "cause"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "Nicki Minaj is acrophobic, meaning she is afraid of heights.",
    "audio": "id_025.WAV",
    "correct": "heights"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "Ed Sheeran has a ketchup bottle tattoo on his arm.",
    "audio": "id_026.WAV",
    "correct": "ketchup"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "In the original Psycho movie, the blood in the famous shower scene was actually chocolate syrup.",
    "audio": "id_027.WAV",
    "correct": "blood"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "There are more storms on Mars when the planet is closer to the sun.",
    "audio": "id_028.WAV",
    "correct": "sun"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "False eyelashes were invented in 1916 when a producer wanted to enhance an actress’ eyes in a movie. The lashes were made of human hair.",
    "audio": "id_029.WAV",
    "correct": "hair"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "You're not allowed to swear if playing in Wimbledon. Because of this, line judges have to learn curse words in every language.",
    "audio": "id_030.WAV",
    "correct": "curse"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "It is illegal to play a musical instrument in the Northern Territory, Australia, for the purpose of annoying other people.",
    "audio": "id_031.WAV",
    "correct": "other"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "It is illegal to play a musical instrument in the Northern Territory, Australia, for the purpose of annoying other people.",
    "audio": "id_032.WAV",
    "correct": "illegal"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "America consumes almost 50% of the world's chocolate.",
    "audio": "id_033.WAV",
    "correct": "chocolate"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "People who eat breakfast feel better both mentally and physically throughout the day.",
    "audio": "id_034.WAV",
    "correct": "throughout"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "The police in Belfast, Northern Ireland, used music from an ice-cream truck to calm down angry teen rioters.",
    "audio": "id_035.WAV",
    "correct": "angry"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "Aggressive sitting is a sport. It originated in Berlin no later than 2008. You can purchase a special stool for this sport for around 70 dollars.",
    "audio": "id_036.WAV",
    "correct": "purchase"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "The whole Harry Potter series contains 199 chapters, 4,224 pages, and 1,090,739 words and has been made into 19 hours and 39 minutes of the film.",
    "audio": "id_037.WAV",
    "correct": "whole"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "The distance from your wrist to your elbow is the same length as your foot.",
    "audio": "id_038.WAV",
    "correct": "The"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "The average computer user blinks seven times a minute, the normal rate is twenty times.",
    "audio": "id_039.WAV",
    "correct": "minute"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "If you keep a goldfish in a dark room, it will become pale.",
    "audio": "id_040.WAV",
    "correct": "become"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "Cucumber can actually cure bad breath. A slice pressed to the roof of your mouth for 30 seconds with your tongue allows the phyto chemicals to kill the problematic bacteria.",
    "audio": "id_041.WAV",
    "correct": "breath"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "27,000 trees are cut down every day to supply the world’s toilet paper.",
    "audio": "id_042.WAV",
    "correct": "cut"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "According to scientists, the weight of the average cumulus cloud is 4989516 kgs.",
    "audio": "id_043.WAV",
    "correct": "scientists"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "The first band to ever perform live on all seven continents was Metallica.",
    "audio": "id_044.WAV",
    "correct": "live"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "2017 survey found Paraguay to be the happiest country in the world for the second year in a row.",
    "audio": "id_045.WAV",
    "correct": "row"
  },
    {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "There are more than 70 species of mushrooms that glow in the dark.",
    "audio": "id_046.WAV",
    "correct": "species"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "There is a Guinness world record for the longest amount of time needed to create an official government - it is held by Belgium.",
    "audio": "id_047.WAV",
    "correct": "record"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "Canadian law requires citizens to answer a math question when entering sweepstakes. This is done to add some aspect of skill to the contest.",
    "audio": "id_048.WAV",
    "correct": "law"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "The Empire State building only took a little over a year to build (410) days and it was 12 days ahead of schedule when completed.",
    "audio": "id_049.WAV",
    "correct": "building"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "Deep snow can sometimes appear blue in color because the extra layers of snow create a filter for light.",
    "audio": "id_050.WAV",
    "correct": "layer"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "The least common day to be born on is May 22nd.",
    "audio": "id_051.WAV",
    "correct": "least"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "Because of its unique tilt, a single night on Uranus lasts for 21 years.",
    "audio": "id_052.WAV",
    "correct": "night"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "There is such an expansive collection of books under the British library in their archive, which if a person could read 5 books per day, it would take them 80,000 years to complete.",
    "audio": "id_053.WAV",
    "correct": "archive"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "85% of Valentine's Day Cards are bought by women.",
    "audio": "id_054.WAV",
    "correct": "women"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "In America, it is a federal crime to use your roommate or friend's Netflix account.",
    "audio": "id_055.WAV",
    "correct": "account"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "Volkswagen owns Bentley, Bugatti, Lamborghini, Audi, Ducati, and Porsche.",
    "audio": "id_056.WAV",
    "correct": "Porsche"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "When Nike first started, it was called Blue Ribbon Sports. The name was changed in 1971.",
    "audio": "id_057.WAV",
    "correct": "changed"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "The modern salute is believed to be derived from the way in which French Knights would greet each other by lifting the visors of their helmets.",
    "audio": "id_058.WAV",
    "correct": "greet"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "Canadians say 'sorry' so much that a law was passed in 2009 declaring that an apology can’t be used as evidence of admission to guilt.",
    "audio": "id_059.WAV",
    "correct": "evidence"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "Back when dinosaurs existed, there used to be volcanoes that were erupting on the moon.",
    "audio": "id_060.WAV",
    "correct": "dinosaurs"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "The only letter that doesn't appear on the periodic table is J.",
    "audio": "id_061.WAV",
    "correct": "J"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "The famous line in Titanic from Leonardo DiCaprio,'I'm king of the world!' was improvised.",
    "audio": "id_062.WAV",
    "correct": "famous"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "If you cut down a cactus in Arizona, you'll be penalized up to 25 years in jail. It is similar to cutting down a protected tree species.",
    "audio": "id_063.WAV",
    "correct": "jail"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "In Colorado, USA, there is still an active volcano. It last erupted about the same time as the pyramids were being built in Egypt.",
    "audio": "id_064.WAV",
    "correct": "Egypt"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "The first movie ever to put out a motion-picture soundtrack was Snow White and the Seven Dwarves.",
    "audio": "id_065.WAV",
    "correct": "first"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "Iceland does not have a railway system.",
    "audio": "id_066.WAV",
    "correct": "Iceland"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "The tongue is the only muscle in one's body that is attached from one end.",
    "audio": "id_067.WAV",
    "correct": "muscle"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "An 11-year-old girl proposed the name for Pluto after the Roman god of the Underworld.",
    "audio": "id_068.WAV",
    "correct": "god"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "The British government coined the slogan, 'Keep Calm and Carry on' during World War 2 in order to motivate citizens to stay strong.",
    "audio": "id_069.WAV",
    "correct": "motivate"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "Tirana, the capital of Albania has a lot of things in common with other European capitals - except one. It's one of two capitals without a McDonald's. The second is Vatican City.",
    "audio": "id_070.WAV",
    "correct": "without"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "The largest Japanese population outside of Japan stands at 1.6 million people, who live in Brazil.",
    "audio": "id_071.WAV",
    "correct": "live"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "There is an island called 'Just Enough Room', where there's just space for a tree and a house.",
    "audio": "id_072.WAV",
    "correct": "enough"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "People who post their fitness routine on Facebook are more likely to have psychological problems.",
    "audio": "id_073.WAV",
    "correct": "psychological"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "Nowadays, millionaires with just $1 million aren’t considered wealthy anymore by most Americans. Now, the typical American sees at least $2.4 million as wealthy.",
    "audio": "id_074.WAV",
    "correct": "Nowadays"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "There is a company that sells mirrors that make people look 4.5 kgs thinner. Overall, the mirrors have contributed to 54% of total sales for retailers that use it.",
    "audio": "id_075.WAV",
    "correct": "sales"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "Although GPS is free for the world to use, it costs $2 million per day to operate. The money comes from American tax revenue.",
    "audio": "id_076.WAV",
    "correct": "Although"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "The human eye is so sensitive that if the Earth were flat and it was a dark night, a candle's flame could be seen from 48 kms away.",
    "audio": "id_077.WAV",
    "correct": "Earth"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "The color red doesn't really make bulls angry; they are color-blind.",
    "audio": "id_078.WAV",
    "correct": "blind"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "Until 2016, the 'Happy Birthday' song was not for public use. Meaning, prior to 2016, the song was copyrighted and you had to pay a license to use it.",
    "audio": "id_079.WAV",
    "correct": "puclic"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "There is a punctuation mark used to signify irony or sarcasm, which looks like a backwards question mark (⸮).",
    "audio": "id_080.WAV",
    "correct": "irony"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "The Ethiopian calendar is 7.5 years behind the Gregorian calendar due to the fact that it has 13 months.",
    "audio": "id_081.WAV",
    "correct": "due"
  },
  {
    "type": "audio",
    "instruction": "Listen carefully. Which word in the sentence is pronounced incorrectly? Write it in the gap.",
    "sentence": "China is spending $3 billion to build panda-shaped solar farms in order to get more young people interested in renewable energy.",
    "audio": "id_082.WAV",
    "correct": "renewable"
  }
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let currentTask = 0;
let score = 0;
let timeLeft = 45;
let timerId = null;

const startBtn = document.getElementById("start-btn");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");

const instructionEl = document.getElementById("task-instruction");
const sentenceEl = document.getElementById("sentence-area");
const inputEl = document.getElementById("user-answer");
const audioEl = document.getElementById("audio-player");
const feedbackEl = document.getElementById("feedback");
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");

function startGame() {
  shuffle(tasks);  // 🔀 Shuffle tasks at the start

  startBtn.style.display = "none";
  document.getElementById("game-content").style.display = "block";
  loadTask(currentTask);
  startTimer();
}

function loadTask(index) {
  audioEl.pause();           
  audioEl.currentTime = 0;

  const task = tasks[index];

  instructionEl.textContent = task.instruction;
  sentenceEl.textContent = task.sentence;

  if (task.type === "audio") {
  audioEl.src = "audio/" + task.audio;
  audioEl.style.display = "block";
  audioEl.load(); // Optional: ensures the audio file is ready
} else {
  audioEl.style.display = "none";
}

  inputEl.value = "";
  inputEl.disabled = false;
  inputEl.placeholder = "Type the corrected word...";

  feedbackEl.textContent = "";
  backBtn.disabled = false;
  submitBtn.disabled = false;
  nextBtn.disabled = false;
}

function startTimer() {
  clearInterval(timerId);
  timeLeft = 45;
  timerEl.textContent = `⏱️ Time left: ${timeLeft}s`;
  
  timerId = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `⏱️ Time left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      feedbackEl.textContent = "⏰ Time's up!";
    }
  }, 1000);
}

function checkAnswer() {
  const userAnswer = inputEl.value.trim().toLowerCase();
  const correctAnswer = tasks[currentTask].correct.toLowerCase();

  if (userAnswer === correctAnswer) {
    feedbackEl.textContent = "✅ Correct!";
    score++;
    scoreEl.textContent = score;
  } else {
    feedbackEl.textContent = `❌ Incorrect. Answer: ${tasks[currentTask].correct}`;
  }

  inputEl.disabled = true;
  submitBtn.disabled = true;
  clearInterval(timerId);
}

submitBtn.addEventListener("click", checkAnswer);

nextBtn.addEventListener("click", () => {
  if (currentTask < tasks.length - 1) {
    currentTask++;
    loadTask(currentTask);
    startTimer();
  } else {
    // Last task reached, restart the game:
    currentTask = 0;
    score = 0;
    scoreEl.textContent = score;
    loadTask(currentTask);
    startTimer();
    feedbackEl.textContent = "";
    inputEl.disabled = false;
    submitBtn.disabled = false;
  }
});

backBtn.addEventListener("click", () => {
  if (currentTask > 0) {
    currentTask--;
    loadTask(currentTask);
    startTimer();
  }
});

startBtn.addEventListener("click", startGame);