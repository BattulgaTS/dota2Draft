var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function Prompt (props){
  return (
    <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBg}>
      <h1> Add hero to Enemy team </h1>
      <div className='col-sm-12'>
        <form onSubmit={props.onSubmitUser}>

          <div className='form-group'>
            <input
              className='form-control'
              placeholder='Hero Name'
              onChange={props.onUpdateUser}
              value={props.heroname}
              type='text' />
          </div>

          <div className='form-group col-sm-4 col-sm-offset-4'>
            <button
              className='btn btn-block btn-success'
              type='submit' >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )

}

Prompt.propTypes = {
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  heroname: PropTypes.string.isRequired
}

module.exports = Prompt;
