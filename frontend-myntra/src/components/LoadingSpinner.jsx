function LoadingSpinner() {
  return (
    <div class="d-flex justify-content-center spinner">
  <div class="spinner-border" role="status" style={{width:"5rem", height:"5rem"}}>
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
  )
}

export default LoadingSpinner