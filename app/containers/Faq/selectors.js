import { createSelector } from 'reselect';

const selectFaq = (state) => state.get('faq');

const makeSelectFaq = () => createSelector(
  selectFaq,
  (faqState) => faqState.get('data')
);

export {
  selectFaq,
  makeSelectFaq,
};
