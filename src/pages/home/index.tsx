import logo from '@assets/images/logo.svg';
import { useRequest } from '@hooks/useRequest';
import { Button } from 'antd';
import { useEffect } from 'react';
import './index.scss';

const Home = () => {
  const { get, response, loading, error } = useRequest();
  async function loadInitialData() {
    const initialData = await get('/fact');
    if (response.ok) {
      console.log(initialData)
    }
  }

  useEffect(() => { loadInitialData() }, [])

  return (
    <div className="home">
      {error && 'Error!'}
      {loading && 'Loading...'}
      {process.env.BASE_URL}
      <header className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <Button type="primary">Button</Button>
        <p>
          <a href="/">Home</a>
          <a href="/customer-home">Customer Home</a>
          <a href="/redux-example">Redux Example</a>
        </p>
      </header>
    </div>
  );
}

export default Home;
