import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useLocale } from 'next-intl';

import Description from '@/components/atoms/Description/Description';
import Title from '@/components/atoms/Title/Title';
import IPage from '@/interfaces/IPage';
import { LocaleCodeCamelcase } from '@/locales';
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';
import getRichTextEditorRenderOptions from '@/utils/getRichTextEditorRenderOptions';

import styles from './Page.module.scss';

interface Props {
  page: IPage;
}

export default function Page({ page }: Props): React.ReactElement {
  const locale = capitalizeFirstLetter(useLocale()) as LocaleCodeCamelcase;

  const title = page[`name${locale}`];
  const description = page[`description${locale}`]?.json;
  const links = page[`description${locale}`]?.links;

  return (
    <article className={styles.page}>
      <Title>{title}</Title>

      {description && links && (
        <Description>
          {documentToReactComponents(description, getRichTextEditorRenderOptions(links))}
        </Description>
      )}
    </article>
  );
}
