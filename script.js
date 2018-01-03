var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

  getDefaultProps: function() {
    console.log ('Kiedy uzytkownik tworzy nową listę zakupów')
  },

  componentWillMount() {
    console.log ('Kiedy uzytkownik tworzy nową listę zakupów')
  },

  componentDidMount(){
    console.log ('Kiedy uzytkownik tworzy nową listę zakupów')
  },

  componentWillReceiveProps(nextProps){
    console.log ('Kiedy np uzytkownik dodał nowy kontakt do listy')
  },

  shouldComponentUpdate(nextProps, nextState){
    console.log ('Kiedy np uzytkownik dodał nowy kontakt do listy')
  },
  componentWillUpdate(nextProps, nextState){
    console.log ('Kiedy np uzytkownik dodał nowy kontakt do listy')
  },
  componentDidUpdate(prevProps, prevState){
    console.log ('Kiedy np uzytkownik dodał nowy kontakt do listy')
  },
  componentWillUnmount(){
    console.log ('Kiedy użytkownik usuwa listę zakupów')
  },

    increment: function(){
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function(){
        this.setState({
            counter: this.state.counter - 1
        });
    },



    render: function() {
        return React.createElement('div', {},
            React.createElement ('button', {onClick: this.increment}),
            React.createElement ('button', {onClick: this.decrement}),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});


var CounterTwo = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function(){
        this.setState({
            counter: this.state.counter + 2
        });
    },

    decrement: function(){
        this.setState({
            counter: this.state.counter - 2
        });
    },



    render: function() {
        return React.createElement('div', {},
            React.createElement ('button', {onClick: this.increment}),
            React.createElement ('button', {onClick: this.decrement}),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var element = React.createElement(Counter);
var elementTwo = React.createElement(CounterTwo);
ReactDOM.render(element, document.getElementById('app'));
ReactDOM.render(elementTwo, document.getElementById('app'));