import Layout from '../components/Layout';
import Error from '../pages/_error';
import { Component } from 'react';

export default class About extends Component {
    
    static async getInitialProps() {

        const res = await fetch("https://api.github.com/users/aizazshahid");
        const status_code = res.status > 200 ? res.status : false;
        const data = await res.json();

        return { user: data, status_code: status_code };

    }

    render() {
        const { user, status_code } = this.props;

        if( status_code ) {
            return (
                <Error status_code={status_code} />
            )
        }

        return (
            <Layout title="About me">
                <div className="intro">
                    <div className="title">{ user.name }</div>
                    <small className="bio">{ user.bio }</small>
                </div>
                
                <img src={user.avatar_url} alt="me" height="200px" />

                <style jsx>{`
                    .intro {
                        text-align: center;
                        margin: 20px 0;
                    }
                    .title {
                        font-size: 25px;
                    }
                    .bio {
                        color: gray;
                    }
                `}</style>
            </Layout>
        );
    }
}