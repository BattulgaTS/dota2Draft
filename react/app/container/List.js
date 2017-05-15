var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;


function List (props){
  return (
    <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBg}>
      <h1> Add hero to Enemy team </h1>
      <div className='col-sm-12'>
        <form>

          <div className='form-group'>
            <input
              className='form-control'
              placeholder='Hero Name'
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

module.exports = List;
