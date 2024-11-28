"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Divider } from 'antd';
import { InstagramOutlined, LinkedinOutlined, GithubOutlined, GoogleOutlined } from '@ant-design/icons';

export default function Home() {
  useEffect(() => {
    const audio = new Audio('/sound.mp3');
    audio.loop = true;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <>
      <header>
        <h1 className='typewriter'>Demir İşleniyor<span className="dots"></span></h1>
        <h4>Bu dijital zanaata tanıklık edin; yakında görüşmek üzere.</h4>
      </header>

      <main>
        <div className='container'>
          <Image
              className='fade'
              src="/circle.gif"
              height={400}
              width={400}
              alt='asd'
              unoptimized
              draggable="false"
            />
        </div>
      </main>

      <footer>
        <div className="buttonWrapper">
          <Link href="https://www.instagram.com/erkmangelis/" passHref>
            <Button style={{color: '#ffcc66a4'}} type="link" icon={<InstagramOutlined />} size="large"/>
          </Link>
          <Divider type="vertical" style={{ borderColor: '#ffcc66a4' }} />
          <Link href="https://www.linkedin.com/in/erkmangelis/" passHref>
            <Button style={{color: '#ffcc66a4'}} type="link" icon={<LinkedinOutlined />} size="large"/>
          </Link>
          <Divider type="vertical" style={{ borderColor: '#ffcc66a4' }} />
          <Link href="https://github.com/erkmangelis/" passHref>
            <Button style={{color: '#ffcc66a4'}} type="link" icon={<GithubOutlined />} size="large"/>
          </Link>
          <Divider type="vertical" style={{ borderColor: '#ffcc66a4' }} />
          <Link href="mailto:erkmangls@gmail.com" passHref>
            <Button style={{color: '#ffcc66a4'}} type="link" icon={<GoogleOutlined />} size="large"/>
          </Link>
        </div>
        <div className='copyright'>
          <p>© 2024 Erkmen Geliş. Tüm hakları saklıdır.</p>
        </div>
      </footer>

      <div className="particle-container">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
    </div>
  </>
  );
}
