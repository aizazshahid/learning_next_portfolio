import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ title, slug, content }) => (
    <li>
        <Link as={`/${slug}`} href={`/post?title=${title}&content=${content}`}>
            <a>{title} Post</a>
        </Link>
    </li>
);

const Blog = () => (
    <Layout title="My Blog">
        <ul>
            <PostLink title="React" slug="react-post" content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta eros eget purus eleifend scelerisque. Etiam id lectus lorem. Morbi in ipsum id purus finibus pharetra ac eget mi. Nam non viverra mauris. Aliquam leo tortor, sollicitudin sed sem eget, tincidunt gravida libero. Proin pellentesque fringilla velit, eu accumsan leo lacinia et. Vestibulum sed enim eu neque faucibus convallis. Nullam ac libero consequat tellus scelerisque convallis ut vitae sem. Sed id lacus tortor. " />
            <PostLink title="Nextjs" slug="nextjs-post" content="Donec luctus faucibus dolor quis blandit. Integer ac porttitor orci. Phasellus ut arcu libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac iaculis nisl. Aenean sed aliquet quam, sit amet elementum turpis. Mauris quis tortor felis. Etiam id justo at ex imperdiet eleifend." />
            <PostLink title="Vuejs" slug="vuejs post" content="Etiam commodo velit in facilisis porttitor. Vestibulum faucibus, nibh vel tempus ultrices, dolor tellus porta lacus, et euismod libero risus eget nibh. Curabitur imperdiet, quam tempus auctor placerat, augue arcu vehicula felis, a varius dui urna at ipsum. Pellentesque faucibus magna id lacus scelerisque, ut euismod justo tristique. Sed placerat dignissim urna, id dapibus dolor. Aliquam erat volutpat. Nullam ut commodo ligula." />
        </ul>
    </Layout>
)
            

export default Blog;