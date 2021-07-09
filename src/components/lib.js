import classes from './lib.module.css'

function ErrorMessage({error, variant = 'stacked', ...props}) {
  return (
    <div role="alert" className={classes.ErrorMessage} {...props}>
      <span>There was an error: </span>
      <pre>{error.message}</pre>
    </div>
  )
}

function FullPageErrorFallback({error}) {
  return (
    <div role="alert" className={classes.FullPageErrorFallback}>
      <p>Uh oh... There's a problem. Try refreshing the app.</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export {FullPageErrorFallback, ErrorMessage}
