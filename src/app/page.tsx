"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Divider } from 'antd';
import { InstagramOutlined, LinkedinOutlined, GithubOutlined, MailOutlined, SoundOutlined } from '@ant-design/icons';

export default function Home() {
  const [audioPlaying, setAudioPlaying] = useState(false); // Ses durumu
  const [gifKey, setGifKey] = useState(Date.now()); // GIF'in sıfırdan başlaması için key kullanıyoruz

  // Sayfa yüklendiğinde otomatik ses çalma
  useEffect(() => {
    // Sayfa yüklendiğinde ses başlatma
    const audio = new Audio('/sound.mp3');
    audio.loop = true;
    audio.play().then(() => {
      setAudioPlaying(true); // Ses başladığında durumu güncelle
    }).catch(err => {
      console.error("Ses çalarken bir hata oluştu: ", err);
    });

    // GIF'i sıfırdan başlatmak için key'i değiştirelim
    setGifKey(Date.now());

    // Temizlik
    return () => {
      audio.pause(); // Sayfa kapanırken sesi durdur
    };
  }, []); // Boş array ile sadece bir kez çalışmasını sağlıyoruz

  // Ses çalmaya başlandığında GIF'i sıfırdan başlatmak için
  const handleAudioStart = () => {
    if (!audioPlaying) {
      const audio = new Audio('/sound.mp3');
      audio.loop = true;
      audio.play();
      setAudioPlaying(true);

      // GIF'i sıfırdan başlatmak için key'i değiştirelim
      setGifKey(Date.now());
    }
  };

  return (
    <>
      {!audioPlaying && (
      <Button onClick={handleAudioStart} style={{backgroundColor: '#ffcc66a4', color: 'rgba(50, 40, 40, 1)', position: 'fixed', margin: '10px'}} shape="circle" type="primary" icon={<SoundOutlined />} size="large"/>
      )}
      <header>
        <h1 className='typewriter'>Demir İşleniyor<span className="dots"></span></h1>
        <h4>Bu dijital zanaata tanıklık edin; yakında görüşmek üzere.</h4>
      </header>

      <main>
        <div className='container'>
          <Image
              key={gifKey}
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
            <Button style={{color: '#ffcc66a4'}} type="link" icon={<MailOutlined />} size="large"/>
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
