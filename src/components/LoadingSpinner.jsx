export default function LoadingSpinner() {

  return (
    <div className="spinner-border text-primary mx-auto" style={{width: '10rem', height: '10rem', fontSize: '5rem'}} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}