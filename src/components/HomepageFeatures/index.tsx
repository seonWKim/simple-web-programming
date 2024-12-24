import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Where Leaders Are Made',
        Svg: require('@site/static/img/leaders.svg').default,
        description: (
            <>
                Join us to develop your leadership skills through various roles and responsibilities.
            </>
        ),
    },
    {
        title: 'Lots of Speech Opportunities',
        Svg: require('@site/static/img/speech.svg').default,
        description: (
            <>
                Enhance your public speaking skills with numerous opportunities to speak in front of audiences.
            </>
        ),
    },
    {
        title: 'Gatherings with Great People',
        Svg: require('@site/static/img/gatherings.svg').default,
        description: (
            <>
                Network and connect with like-minded individuals in a supportive environment.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
