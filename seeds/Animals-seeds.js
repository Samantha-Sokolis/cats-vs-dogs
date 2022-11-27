const { Animal } = require('../models');

const animalData = [
    {
        "animal_type": "dog",
        "animal_breed": "Golden Retriever", 
        "size": "Medium-large",
        "temperament": "Friendly, energetic, loyal",
        "description": "A Scottish breed of retriever dog characterised by a gentle and affectionate nature and a striking golden coat.",
        "filename": "01-dog-golden-retriever.jpg",
        "category_id": 1
        
    },
    {
        "animal_type": "dog",
        "animal_breed": "Staffordshire bull terrier", 
        "size": "Medium",
        "temperament": "Affectionate, intelligent, friendly",
        "description": "Also called the Staffy or Stafford, is a popular family dog due to their gentle and loyal nature around children",
        "filename": "02-dog-staffy.jpg",
        "category_id": 1
    },
    {
        "animal_type": "dog",
        "animal_breed": "Daschund", 
        "size": "Small",
        "temperament": "Clever, Stubborn, Devoted",
        "description": "Also known as a sausage dog, is a short-legged, long-bodied, hound-type dog breed.",
        "filename": "03-dog-daschund.jpg",
        "category_id": 1
    },
    {
        "animal_type": "dog",
        "animal_breed": "Greyhound", 
        "size": "Small-Medium",
        "temperament": "Affectionate, Athletic, Quiet, Gentle",
        "description": "The Greyhound, is a sighthound which has been bred for racing initially.",
        "filename": "04-dog-greyhound.jpg",
        "category_id": 1
    },
    {
        "animal_type": "cat",
        "animal_breed": "Burmese", 
        "size": "Medium",
        "temperament": "energetic, curious and playful",
        "description": "This breed is....",
        "filename": "05-cat-burmese.jpg",
        "category_id": 2
    },
    {
        "animal_type": "cat",
        "animal_breed": "Ragdoll", 
        "size": "Medium",
        "temperament": "energetic, curious and playful",
        "description": "They may come when called and can even learn to play fetch. They are good with children, other cats and dogs.",
        "filename": "06-cat-ragdoll.jpg",
        "category_id": 2
    },
    {
        "animal_type": "cat",
        "animal_breed": "Siamese", 
        "size": "Medium",
        "temperament": "social, intelligent and vocal",
        "description": "This highly intelligent feline will seek out things to occupy her mind.",
        "filename": "07-cat-siamese.jpg",
        "category_id": 2
    },
    {
        "animal_type": "cat",
        "animal_breed": "Sphynx", 
        "size": "Medium",
        "temperament": "social, intelligent and vocal",
        "description": "if you don’t want your cat getting into mischief, give her puzzle feeders, games and more to keep her entertained.",
        "filename": "08-cat-sphynx.jpg",
        "category_id": 2
    }
];

const seedAnimals = () => Animal.bulkCreate(animalData);

module.exports = seedAnimals;
