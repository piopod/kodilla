var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        image: 'http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: 'http://img.moviepostershop.com/the-lion-king-movie-poster-1994-1010713917.jpg'
    },
    {
        id: 3,
        title: 'Matrix',
        desc:'Film o gościu w czarnym płaszczu',
        image: 'https://movieposters2.com/images/699168-b.jpg'
    },
    {
        id: 4,
        title: 'Titanic',
        desc: 'Film o statku',
        image: 'http://www.hometheaterseattle.com/assets/images/movies/titanic-movie-1997-2.jpg'
    },
    {
        id: 5,
        title: 'Pianist',
        desc: 'Film o cierpieniu',
        image: 'https://i.pinimg.com/originals/3e/bd/d8/3ebdd87ab07c477b875fde0462f8220d.jpg'
    }

];



var Movie = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },
  
  render: function() {
    var moviesElements = movies.map(function(movie){
    return React.createElement('li', {},
        React.createElement('h2', {}, movie.title),
        React.createElement('p',{},movie.desc),
        React.createElement('img',{src: movie.image})
        );
});

      return (
        React.createElement(Movie, {key: movie_id}) 
        );
    }
});


var MovieTitle = React.createClass({
  propTypes: {
    data: React.PropTypes.string.isRequired
  },
  
  render: function() {

    return React.createElement('h2', {}, movie.title),
});
    

var MovieDescription = React.createClass({
  propTypes: {
    data: React.PropTypes.string.isRequired
  },
  
  render: function() {

    return React.createElement('p', {}, movie.desc),
});




