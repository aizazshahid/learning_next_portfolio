import Layout from '../components/Layout'

export default ({ status_code }) => (
    <Layout title="Error!">
        { status_code ? 
            `Unable to load your user data, status code ${status_code}.`
            : `Sorry, couldn't get that page.` }
    </Layout>
)