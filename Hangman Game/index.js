const movies = [
    { name: "Avatar", hint: "English - A sci-fi film about a human-alien hybrid." },
    { name: "Baahubali", hint: "Telugu - Epic historical fiction film known for its grandeur and visual effects." },
    { name: "Dilwale Dulhania Le Jayenge", hint: "Hindi - Romantic drama known for its iconic train scene and timeless love story." },
    { name: "Chennai Express", hint: "Hindi - Action-comedy film featuring a journey from Mumbai to Rameswaram." },
    { name: "3 Idiots", hint: "Hindi - Comedy-drama film advocating education reform and chasing dreams." },
    { name: "Nayakan", hint: "Tamil - Crime drama film inspired by the life of Mumbai underworld don Varadarajan Mudaliar." },
    { name: "Drishyam", hint: "Malayalam - Thriller film about a man who protects his family from suspicion after a crime." },
    { name: "Bangalore Days", hint: "Malayalam - Romantic comedy-drama film revolving around three cousins in Bangalore." },
    { name: "KGF Chapter 1", hint: "Kannada - Action-packed film set in the 1970s about a gold smuggler's rise to power." },
    { name: "Lucia", hint: "Kannada - Psychological thriller film that blurs the line between dreams and reality." },
    { name: "The Shawshank Redemption", hint: "English - Drama film based on the Stephen King novella 'Rita Hayworth and Shawshank Redemption'." },
    { name: "Inception", hint: "English - Sci-fi thriller film exploring the concept of dreams and reality." },
    { name: "Parasite", hint: "Korean - Dark comedy-thriller film about social class differences." },
    { name: "Life is Beautiful", hint: "Italian - Comedy-drama film set during the Holocaust, focusing on a father's efforts to shield his son from the horrors of internment." },
    { name: "Pan's Labyrinth", hint: "Spanish - Dark fantasy film set in post-Civil War Spain, blending fantasy elements with harsh reality." },
    { name: "Crouching Tiger, Hidden Dragon", hint: "Mandarin - Wuxia martial arts film exploring themes of love, honor, and redemption." },
    { name: "Amélie", hint: "French - Romantic comedy film about a quirky young woman in Paris who sets out to change the lives of those around her for the better." },
    { name: "Spirited Away", hint: "Japanese - Fantasy film about a young girl who discovers a mysterious, magical world." },
    { name: "City of God", hint: "Portuguese - Crime drama film depicting life in the favelas of Rio de Janeiro." },
    { name: "Oldboy", hint: "Korean - Neo-noir action thriller film about a man who seeks revenge after being imprisoned for 15 years." }
];

//science dataset
const science = [
    { name: "Atom", hint: "Basic unit of matter consisting of a nucleus surrounded by electrons." },
    { name: "DNA", hint: "Molecule that carries genetic instructions for the development, functioning, growth, and reproduction of all known organisms." },
    { name: "Gravity", hint: "Force that attracts two bodies toward each other, related to the mass of the objects and the distance between them." },
    { name: "Evolution", hint: "Process by which species change over time, often driven by natural selection, genetic drift, and mutation." },
    { name: "Photosynthesis", hint: "Process used by plants and other organisms to convert light energy into chemical energy." },
    { name: "Black Hole", hint: "Region of spacetime where gravity is so strong that nothing, not even light, can escape from it." },
    { name: "Gene", hint: "Unit of heredity that is transferred from a parent to offspring and determines some characteristic of the offspring." },
    { name: "Neutron", hint: "Subatomic particle found in the nucleus of an atom, with no net electric charge." },
    { name: "RNA", hint: "Molecule similar to DNA that plays a role in protein synthesis and other cellular functions." },
    { name: "Plate Tectonics", hint: "Scientific theory describing the large-scale motions of Earth's lithosphere." },
    { name: "Solar System", hint: "Collection of planets and other objects orbiting a star (in our case, the Sun)." },
    { name: "Big Bang", hint: "Cosmological model describing the rapid expansion of space and time from an initial singularity." },
    { name: "Climate Change", hint: "Long-term change in the average weather patterns of a region or the whole Earth." },
    { name: "Quantum Mechanics", hint: "Branch of physics dealing with the behavior of matter and light on the atomic and subatomic scales." },
    { name: "Mutation", hint: "Change in the DNA sequence of a cell's genome." },
    { name: "Nanotechnology", hint: "Field of science and technology focused on manipulating matter on an atomic and molecular scale." },
    { name: "Chemical Reaction", hint: "Process that results in the transformation of one set of chemical substances to another." },
    { name: "Fossil Record", hint: "Collection of fossils and their placement in chronological order to understand the history of life on Earth." },
    { name: "Genome", hint: "Complete set of genetic material present in an organism." },
    { name: "Artificial Intelligence", hint: "Branch of computer science dealing with the simulation of intelligent behavior in computers." }
];



//books dataset
const books = [
    { name: "1984", hint: "Dystopian novel by George Orwell" },
    { name: "To Kill a Mockingbird", hint: "Harper Lee's Pulitzer Prize-winning novel" },
    { name: "The Catcher in the Rye", hint: "J.D. Salinger's coming-of-age novel" },
    { name: "Pride and Prejudice", hint: "Jane Austen's classic romance" },
    { name: "The Great Gatsby", hint: "F. Scott Fitzgerald's Jazz Age novel" },
    { name: "Harry Potter and the Philosopher's Stone", hint: "First book in J.K. Rowling's series" },
    { name: "The Hobbit", hint: "Fantasy novel by J.R.R. Tolkien" },
    { name: "The Hunger Games", hint: "Suzanne Collins' dystopian trilogy starter" },
    { name: "The Da Vinci Code", hint: "Dan Brown's religious thriller" },
    { name: "Gone Girl", hint: "Gillian Flynn's psychological thriller" },
    { name: "The Girl on the Train", hint: "Paula Hawkins' gripping mystery" },
    { name: "The Lord of the Rings", hint: "Epic fantasy trilogy by J.R.R. Tolkien" },
    { name: "Moby-Dick", hint: "Herman Melville's tale of obsession and revenge" },
    { name: "Brave New World", hint: "Aldous Huxley's dystopian vision" },
    { name: "Jane Eyre", hint: "Charlotte Brontë's Gothic romance" },
    { name: "The Hitchhiker's Guide to the Galaxy", hint: "Douglas Adams' comedic sci-fi adventure" },
    { name: "War and Peace", hint: "Leo Tolstoy's epic novel of Russian society" },
    { name: "The Kite Runner", hint: "Khaled Hosseini's novel set in Afghanistan" },
    { name: "The Chronicles of Narnia", hint: "C.S. Lewis' classic fantasy series" },
    { name: "The Book Thief", hint: "Markus Zusak's novel set in Nazi Germany" }
];

//actor names dataset
const actornames = [
    { name: "Amitabh Bachchan", hint: "Legendary actor known as the 'Shahenshah' of Bollywood" },
    { name: "Shah Rukh Khan", hint: "Bollywood 'King' known for romantic roles and global popularity" },
    { name: "Rajinikanth", hint: "Superstar of Tamil cinema, known for his style and mass appeal" },
    { name: "Kamal Haasan", hint: "Versatile actor from Tamil cinema, known for his acting prowess" },
    { name: "Ranbir Kapoor", hint: "Young actor from Bollywood, known for his acting lineage" },
    { name: "Salman Khan", hint: "Bollywood 'Bhai' known for action-packed roles and philanthropy" },
    { name: "Prabhas", hint: "Telugu cinema actor, famous for his role in 'Baahubali'" },
    { name: "Ajay Devgn", hint: "Versatile actor known for action and intense roles in Bollywood" },
    { name: "Mahesh Babu", hint: "Popular actor from Telugu cinema, known for his charm and acting skills" },
    { name: "Vijay", hint: "Tamil cinema 'Thalapathy' known for his mass appeal and social message films" },
    { name: "Nawazuddin Siddiqui", hint: "Versatile actor known for his intense and character-driven roles" },
    { name: "Alia Bhatt", hint: "Talented actress known for her versatility and strong performances" },
    { name: "Deepika Padukone", hint: "Leading Bollywood actress known for her beauty and acting skills" },
    { name: "Rajkummar Rao", hint: "Critically acclaimed actor known for his diverse roles and versatility" },
    { name: "Vijay Sethupathi", hint: "Tamil actor known for his natural acting and unconventional roles" },
    { name: "Nani", hint: "Telugu actor known for his natural performances and varied roles" },
    { name: "Kangana Ranaut", hint: "Bold and talented actress known for her fearless roles and outspoken nature" },
    { name: "Samantha Akkineni", hint: "Popular actress from Telugu and Tamil cinema, known for her charm and acting prowess" },
    { name: "Ranveer Singh", hint: "Energetic actor known for his flamboyant style and versatile performances" },
    { name: "Anushka Sharma", hint: "Actress and producer known for her strong roles and progressive choices" }
];

//getting all the variables required
var play = document.getElementById("play");
var want = document.getElementById("want");
var guess = document.getElementById("guess");
var genre = document.getElementById("genre");
var hint = document.getElementById("hint");
var close = document.getElementById("close");
var rules = document.getElementById("rule-section");
var rulebutton = document.getElementById("rules");
var head = document.getElementById("header");
var check = document.getElementById("check");
var input = document.getElementById("enteredword");
const win = document.getElementById("win");
const lost = document.getElementById("lost");
const letter = document.querySelectorAll('.letter-button')
const exit1 = document.getElementById("exit1");
const exit = document.getElementById("exit");
var again = document.getElementById("again");
var main = document.getElementById("main");
var hangman = document.getElementById("hangman");
var name;
var letterindex;
var hint1;
let wordtry = 0;
var count = 0;
let lettertry = -1;
var tryword = "";

//close the rules box
close.addEventListener("click",function(){
    rules.style.visibility = "hidden";
    want.style.visibility = "visible";
    head.style.filter = 'blur(0px)';
})

//displaying the rules box
rulebutton.addEventListener("click",function(){
    rules.style.visibility = "visible";
    head.style.filter = 'blur(5px)';
    want.style.visibility = "hidden";
})

//exit the game
exit1.addEventListener("click",function(){
    main.style.visibility = "hidden";
    win.style.visibility = "hidden";
    want.style.visibility = "visible";
    location.reload();
    tryword = "";

    
})

exit.addEventListener("click",function(){
    main.style.visibility = "hidden";
    win.style.visibility = "hidden";
    want.style.visibility = "visible";
    location.reload();
    tryword = "";
})



function generate(){
    //choosing a random index
    const randomindex = Math.floor(Math.random() * 20);

    //choosing the array according to the value specified
    if (genre.value === 'm'){
        name = movies[randomindex].name;
        hint1 = movies[randomindex].hint;
    }
    else if(genre.value === 's'){
        name = science[randomindex].name;
        hint1 = science[randomindex].hint;
    }
    else if(genre.value === 'b'){
        name = books[randomindex].name;
        hint1 = books[randomindex].hint;
    }
    else{
        name = actornames[randomindex].name;
        hint1 = actornames[randomindex].hint;
    }
}

//clicking the 'play game' button
play.addEventListener("click",function(){
    if (genre.value === ''){
        alert("Please select a genre!");
    }
    else{
        document.documentElement.style.overflowY = 'scroll';
        
        want.style.visibility = "hidden";
        main.style.visibility = "visible";

        generate();
        lettertry = 0;
        
        for(let i= 0;i<name.length;i++){
            var newDiv;
            if (name.charAt(i) === ' '){
                newDiv = document.createElement('div');
                newDiv.style.width = '30px';
            }
            else{
                newDiv = document.createElement('div');
                newDiv.id = `div-${i + 1}`;
                newDiv.textContent = ' ';
                newDiv.style.height = '20px';
                newDiv.style.width = '30px';;
                newDiv.style.borderBottom = '1px solid white';
                newDiv.style.margin = '8px';
            }
            guess.appendChild(newDiv); 
        }
        const h3 = document.createElement('h3');
        h3.textContent = "Hint : " + hint1;
        h3.style.color = "white";
        h3.style.marginLeft = "20px";
        hint.appendChild(h3)
    } 
})

//checking the word entered by the user;
check.addEventListener("click",function(){
    wordtry += 1;
    input.value = input.value.toLowerCase;
    if (input.value == name.toLowerCase){
        win.style.visibility = "visible";
        main.style.visibility = "hidden";
        lettertry = 0;
        /*name = "";
        hint = "";
        letter.forEach(button => {
            button.style.background = "#f0f0f0";
            
        });*/
    }
    else{
        if (wordtry == 2){
            main.style.visibility = "hidden";
            lost.style.visibility = "visible";
            lettertry = 0;
        }
        else{
            alert("Oops! Wrong Answer!")
        }
    }
})

 //checking if the letter is present in the word
 letter.forEach(button => {
    button.addEventListener('click', function() {
        button.style.background = "grey";
        name = name.toUpperCase();
        console.log(name);
        if (name.includes(button.value)){
            letterindex = name.indexOf(button.value);
            let divElement = document.getElementById(`div-${letterindex + 1}`);
            divElement.textContent = button.value;
            let count = name.split('').filter(char => char === button.value).length;
            console.log("count");
            console.log(count)
            tryword = tryword + button.value.repeat(count);
            console.log("tryword");
            console.log(tryword);
            console.log(tryword.length);
            console.log(name.length);
            if (count > 1){
                for(let i = 1;i<count;i++){
                    let index = letterindex + 1;
                    letterindex = name.indexOf(button.value, index);
                    console.log(letterindex);
                    let divElement = document.getElementById(`div-${letterindex + 1}`);
                    divElement.textContent = button.value;

                }
            }
            setTimeout(checkentry(),5000);
           
        } 
        else{
            lettertry += 1;
            console.log(lettertry);
            const filePath = `hangman-${lettertry}.svg`;
            console.log(filePath);
            

            fetch(filePath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(svgContent => {
                    hangman.innerHTML = svgContent;
                })
                .catch(error => {
                    console.error('Error fetching SVG:', error);
                });
            

            if (lettertry == 6){
                main.style.visibility = "hidden";
                lost.style.visibility = "visible";
                lettertry = 0;
                
            }
        }
    });
});     

function checkentry(){
    if ( tryword.length == name.length){
                win.style.visibility = "visible";
                main.style.visibility = "hidden";
                lettertry = 0;
    }
    else{
        if (name.includes(" ")){
            if ( tryword.length == name.length - 1){
                win.style.visibility = "visible";
                main.style.visibility = "hidden";
                lettertry = 0;
            }
        }
    }
}