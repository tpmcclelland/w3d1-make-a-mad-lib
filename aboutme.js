// - First name
// - Last name
// - Email address
// - Grew up in the city (as Boolean)
// - Number of years in college (as Number)
// - High school graduation year (as Number)
// - Number of pets (as Number)
// - Number of children (as Number)
// - Favorite genre of music
// - Favorite movie

var firstName = 'Tom'
var lastName = 'McClelland'
var email = 'tom@mcclelland.me'
var grewUpInCity = false
var yearsInCollege = 4
var highSchoolGraduationYear = new Date()
highSchoolGraduationYear.setFullYear(1997)
var numOfPets = 2
var numOfChildren = 2
var favoriteMusicGenre = 'Singer/Songwriter'
var favoriteMovie = 'Rudy'

console.log(firstName, lastName, email, grewUpInCity, yearsInCollege, highSchoolGraduationYear.getFullYear(), numOfPets, numOfChildren, favoriteMusicGenre, favoriteMovie)
