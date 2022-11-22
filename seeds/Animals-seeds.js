const { Animals } = require('../models');

const animalData = [
    {
        "animal_type": "dog",
        "animal_breed": "Golden Retriver", 
        "size": "Medium-large",
        "temperament": "Friendly, energetic, loyal",
        "description": "The Golden Retriever is a Scottish breed of retriever dog of medium size. It is characterised by a gentle and affectionate nature and a striking golden coat. It is commonly kept as a pet and is among the most frequently registered breeds in several Western countries"
    },
    {
        "animal_type": "dog",
        "animal_breed": "Staffordshire bull terrier", 
        "size": "Medium",
        "temperament": "Affectionate, intelligent, friendly",
        "description": "The Staffordshire Bull Terrier, also called the Staffy or Stafford, is a purebred dog of small to medium size in the terrier group, and a popular family dog due to their gentle and loyal nature around children"
    },
    {
        "animal_type": "dog",
        "animal_breed": "Daschund", 
        "size": "Small",
        "temperament": "Clever, Stubborn, Devoted",
        "description": "The dachshund, also known as a sausage dog, is a short-legged, long-bodied, hound-type dog breed. The dog may be smooth-haired, wire-haired, or long-haired, and comes in a variety of colors."
    },
    {
        "animal_type": "dog",
        "animal_breed": "Greyhound", 
        "size": "Small-Medium",
        "temperament": "Affectionate, Athletic, Quiet, Gentle",
        "description": "The Greyhound, is a sighthound which has been bred for racing. Since the rise in large-scale adoption of retired racing Greyhounds, the breed has seen a resurgence in popularity as a family pet."
    },
    {
        "animal_type": "cat",
        "animal_breed": "Burmese", 
        "size": "Medium",
        "temperament": "energetic, curious and playful",
        "description": "This breed is...."
    },
    {
        "animal_type": "cat",
        "animal_breed": "Ragdoll", 
        "size": "Medium",
        "temperament": "energetic, curious and playful",
        "description": "They may come when called and can even learn to play fetch. They are good with children, other cats and dogs."
    },
    {
        "animal_type": "cat",
        "animal_breed": "Siamese", 
        "size": "Medium",
        "temperament": "social, intelligent and vocal",
        "description": "This highly intelligent feline will seek out things to occupy her mind. So if you don’t want your cat getting into mischief, give her puzzle feeders, games and more to keep her entertained."
    },
    {
        "animal_type": "cat",
        "animal_breed": "Sphynx", 
        "size": "Medium",
        "temperament": "social, intelligent and vocal",
        "description": "This highly intelligent feline will seek out things to occupy her mind. So if you don’t want your cat getting into mischief, give her puzzle feeders, games and more to keep her entertained."
    }
];

const seedAnimals = () => Animals.bulkCreate(animalData);

module.exports = seedAnimals;
