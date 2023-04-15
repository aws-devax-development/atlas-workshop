import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '真正的多云、多区域的云数据库服务',
    illustration: 'img/database.png',
    description: (
      <>
        将您的应用程序轻松部署到AWS、Azure和Google Cloud上多个区域的多个云平台上，
        目前Atlas已经支持全球超过100个公有云Region。
      </>
    ),
  },
  {
    title: '完全集成的开发者数据平台',
    illustration: 'img/app-services.png',
    description: (
      <>
        使用完全托管的云服务(如函数、触发器和api)，仅需少量的时间就可以在Atlas上构建和运行可用于生产的应用程序。
        
      </>
    ),
  },
  {
    title: '支持任何语言或开发框架',
    illustration: 'img/analytics.png',
    description: (
      <>
        在数十种驱动程序和语言上利用丰富的查询api，包括Node.js, Java, Python和Go。

      </>
    ),
  },
];

function Feature({illustration, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={illustration} className={styles.featureImg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
