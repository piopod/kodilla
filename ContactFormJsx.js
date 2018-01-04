var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className="contactForm">
        <input placeholder="Imię" value={this.props.contact.firstName} />
        <input placeholder="Nazwisko" value={this.props.contact.lastName} />
        <input type="email" placeholder="Email" value={this.props.contact.email} />
        <button type="submit">Dodaj kontakt</button>
      </form>          
    )
  },
});
