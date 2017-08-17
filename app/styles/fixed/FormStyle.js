import {style, merge, $} from 'glamor'

export default merge(
  style({
    width: '95%',
    maxWidth: '20rem',
    margin: '0 auto',
    fontFamily: 'Helvetica, Arial, sans-serif',
    boxSizing: 'border-box',
    textAlign: 'center',
  }),
  $(' h1', {
    marginTop: '0',
    color: '#444',
  }),
  $(' input', {
    display: 'block',
    height: '2rem',
    width: '100%',
    padding: '0 .5rem',
    marginBottom: '0rem',
    borderRadius: '.25rem',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
  }),
  $(' input:focus', {
    outline: 'none',
    borderColor: '#aaa',
  }),
  $(' button', {
    height: '2rem',
    width: '5rem',
    textTransform: 'uppercase',
    borderRadius: '.25rem',
    border: '0',
    backgroundColor: '#dc0067',
    color: 'white',
  }),
  $(' label', {
    display: 'block',
    color: '#DB0020',
    float: 'left',
    marginBottom: '.5rem',
    fontSize: '12px',
    paddingTop: '15px',
    lineHeight: '16px',
  }),
  $(' span', {
    color: '#DB0020',
    float: 'left',
    display: 'block',
    fontSize: '12px',
    paddingTop: '3px',
    lineHeight: '16px',
    marginBottom: '0',
    position: 'absolute'
  })
)
