import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../UI/Layout";
import Carousel from "../components/Carousel";

export default function Home() {
	return <Layout>
    <Carousel />
  </Layout>;
}
