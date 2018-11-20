var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //REACT_______________________________________________

//welcome page card_________________________________________________________
var Card = function (_React$Component) {_inherits(Card, _React$Component);
  function Card(props) {_classCallCheck(this, Card);var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this,
    props));
    _this.handleClick = _this.handleClick.bind(_this);return _this;
  }

  //on button click show survey page_____________________
  _createClass(Card, [{ key: 'handleClick', value: function handleClick() {
      $('#app').css('left', '-100%');
    }
    //--------------------------------------------
  }, { key: 'render', value: function render()
    {
      return (
        React.createElement('div', { 'class': 'card' },
          React.createElement('i', { id: 'smile', 'class': 'fa fa-smile-o', 'aria-hidden': 'true' }),
          React.createElement('p', { 'class': 'text' }, ' ', React.createElement('span', { 'class': 'span' }, ' Hello Campers!'),
            React.createElement('br', null), ' At freeCodeCamp we try to give our campers the best learning experience. Help us improve by giving us feedback. Your opinion is valued. '),

          React.createElement('button', { onClick: this.handleClick, id: 'yes' }, 'Yes, Take me to the survey ')));


    } }]);return Card;}(React.Component);




//survey form______________________________________________________________-
var Back = function (_React$Component2) {_inherits(Back, _React$Component2);function Back() {_classCallCheck(this, Back);return _possibleConstructorReturn(this, (Back.__proto__ || Object.getPrototypeOf(Back)).apply(this, arguments));}_createClass(Back, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { 'class': 'back' },
          React.createElement(RequiredForm, null),
          React.createElement(SuggestionForm, null),
          React.createElement(CommentBox, null)));


    } }]);return Back;}(React.Component);


//obj to hold labels for input _____________________________
var labels = [
{ label: '* Name  ', id: 'name-label', input_id: 'name', type: 'text' },
{ label: '* Email  ', id: 'email-label', input_id: 'email', type: 'email' },
{ label: '* Age  ', id: 'age-label', input_id: 'age', type: 'number', min: '1', max: '100' }];


//options for dropdown____________________________________________
var options = [
'Student', 'Full Time Job', 'Full Time Learner', 'Prefer Not to Say', 'Other'];






//LEFT form________________________________________________________
var RequiredForm = function (_React$Component3) {_inherits(RequiredForm, _React$Component3);
  function RequiredForm(props) {_classCallCheck(this, RequiredForm);var _this3 = _possibleConstructorReturn(this, (RequiredForm.__proto__ || Object.getPrototypeOf(RequiredForm)).call(this,
    props));
    _this3.handleChange = _this3.handleChange.bind(_this3);return _this3;
  }

  //when all required fields filled , change border color_________________
  _createClass(RequiredForm, [{ key: 'handleChange', value: function handleChange() {
      if ($("input").filter(function () {
        return $.trim($(this).val()).length == 0; //returns array of filled input elements (excludes white spaces with trim)
      }).length == 0) {
        $('.form').css('border-color', 'green');
      } else
      {
        $('.form').css('border-color', 'black');
      }
    }
    //---------------------------------------------------------------------
  }, { key: 'render', value: function render()

    {var _this4 = this;

      //for each label in labels array create a label and input element-----
      arr = labels.map(function (a) {
        //for number input----------------------------
        if (a.hasOwnProperty('min')) {
          return (
            React.createElement('div', null,
              React.createElement('label', { id: a.id }, React.createElement('strong', null, a.label)),
              React.createElement('input', { name: a.id, id: a.input_id, type: a.type, onChange: _this4.handleChange, min: a.min, max: a.max, required: true }), React.createElement('br', null)));


        }
        //for text or email input -----------------------------
        else {
            return (
              React.createElement('div', null,
                React.createElement('label', { id: a.id }, React.createElement('b', null, a.label)),
                React.createElement('input', { id: a.input_id, type: a.type, onChange: _this4.handleChange, required: true })));


          }
      });

      //arr for dropdown options---------------------------------------
      option = options.map(function (a) {
        return (
          React.createElement('option', { value: a }, a));

      });

      //return the form for rendering______________________________________________________
      return (
        React.createElement('form', { id: 'required', 'class': 'form' },
          React.createElement('div', { id: 'inputs' },
            arr /*render the labels and inputs */,
            React.createElement('div', { id: 'drop' }, React.createElement('label', { id: 'role-dropdown-label' }, 'Which option best describes', React.createElement('br', null), ' your current role? '),
              React.createElement('select', { name: 'roles', id: 'dropdown' },
                option /*render each option for this dropdown*/)))));





    } }]);return RequiredForm;}(React.Component);


//---------------------------------------------------------------------------------------------------


//options for like dropdown-------------
var like_options = [
'Challenges', 'Projects', 'Community', 'Open Source'];



//options for checkbox--------------------------
var checkbox_options = [
'Front End Projects', 'Back End Projects', 'Data Visualization', 'Open Source Community', 'Gitter Help Rooms'];




//RIGHT FORM_______________________________________________________________________
var SuggestionForm = function (_React$Component4) {_inherits(SuggestionForm, _React$Component4);function SuggestionForm() {_classCallCheck(this, SuggestionForm);return _possibleConstructorReturn(this, (SuggestionForm.__proto__ || Object.getPrototypeOf(SuggestionForm)).apply(this, arguments));}_createClass(SuggestionForm, [{ key: 'render', value: function render()
    {

      //for each option create an option element
      like_option = like_options.map(function (a) {
        return (
          React.createElement('option', { value: a }, a));

      });

      //for each option create a checkbox element
      checkbox_option = checkbox_options.map(function (a) {
        return (
          React.createElement('div', null, React.createElement('label', null, React.createElement('input', { 'class': 'button', type: 'checkbox', name: 'improve-options', value: a }), a)));

      });

      return (
        React.createElement('div', { id: 'suggest', 'class': 'form' },
          React.createElement('div', { id: 'like' },
            React.createElement('label', { id: 'like-dropdown-label' }, 'What do you like ', React.createElement('br', null), 'most in FCC  '),
            React.createElement('select', { name: 'like', id: 'dropdown-like' },
              React.createElement('option', { value: 'select-an-option', checked: true }, 'Select an option'), ' ',
              like_option /*render each option element*/)),




          React.createElement('div', { id: 'field' },
            React.createElement('fieldset', { id: 'checkbox-field' },
              React.createElement('div', { 'class': 'field' },
                React.createElement('legend', null, 'Things that should be ', React.createElement('br', null), 'improved in the future ', React.createElement('br', null), '(Check all that apply) '),
                React.createElement('div', { id: 'checkbox' },
                  checkbox_option /*render each checkbox*/))))));






    } }]);return SuggestionForm;}(React.Component);



//comment and submit box_______________________________________
var CommentBox = function (_React$Component5) {_inherits(CommentBox, _React$Component5);function CommentBox() {_classCallCheck(this, CommentBox);return _possibleConstructorReturn(this, (CommentBox.__proto__ || Object.getPrototypeOf(CommentBox)).apply(this, arguments));}_createClass(CommentBox, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { 'class': 'comment-box' },
          React.createElement('textarea', { id: 'comment-area', name: 'comment', placeholder: ' Leave us a comment \u263B' }),
          React.createElement('button', { id: 'submit', type: 'submit', 'class': 'btn btn-info' }, 'Submit', React.createElement('i', { 'class': 'fa fa-paper-plane' }))));


    } }]);return CommentBox;}(React.Component);var




App = function (_React$Component6) {_inherits(App, _React$Component6);function App() {_classCallCheck(this, App);return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));}_createClass(App, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', null,
          React.createElement(Card, null),
          React.createElement(Back, null)));


    } }]);return App;}(React.Component);





//render the app___________________________________________
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));






// JQUERY VALIDATION__________________________________________


$(document).ready(function () {
  $(".form").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true },

      age: {
        required: true,
        number: true } },


    messages: {
      name: "Please specify your name",
      email: {
        required: "We need your email address",
        email: "Your email address must be in the format of name@domain.com" },

      age: {
        required: 'Please specify your age',
        number: 'Your should must be a number between 1 and 100' } } });



});