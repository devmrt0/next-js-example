import type { NextPage } from "next";
import dynamic from 'next/dynamic';
import Link from 'next/link';


const ComponentA = dynamic(() => import('../components/Left'))
const ComponentB = dynamic(() => import('../components/Right'))

const Home: NextPage = () => {
  console.log("Rendering : Root");

  return (
    <div id="container">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/second">Second</Link>
        </li>
       
      </ul>

      <ComponentA />
      <ComponentB />

    </div>
  );
};

export default Home;