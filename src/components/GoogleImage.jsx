import Iframe from 'react-iframe'

const GoogleImage = () => {
  return (
    <>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76218.55154681197!2d-6.255411199999999!3d53.346303999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sie!4v1656068950370!5m2!1sen!2sie"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </>
  )
}
export default GoogleImage
