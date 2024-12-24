import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

// TODO
// Free illustrations: https://undraw.co/illustrations
const FeatureList: FeatureItem[] = [
    {
        title: 'Item 1',
        Svg: require('@site/static/img/leaders.svg').default,
        description: (
            <>
                Description 1
            </>
        ),
    },
    {
        title: 'Item 2',
        Svg: require('@site/static/img/speech.svg').default,
        description: (
            <>
              Description 2
            </>
        ),
    },
    {
        title: 'Item 3',
        Svg: require('@site/static/img/gatherings.svg').default,
        description: (
            <>
              Description 3
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
