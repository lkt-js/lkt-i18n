import {__, setI18n} from "../src";

test('translations', () => {
  setI18n({
    lorem: 'Ipsum',
    dolor: {sit: {amet: 'dolor sit amet :hey'}}
  });

  expect(__('lorem')).toEqual('Ipsum');
  expect(__('dolor')).toEqual({sit: {amet: 'dolor sit amet :hey'}});
  expect(__('dolor', {hey: 'you'})).toEqual({sit: {amet: 'dolor sit amet :hey'}});
  expect(__('dolor.sit')).toEqual({amet: 'dolor sit amet :hey'});
  expect(__('dolor.sit.amet')).toEqual('dolor sit amet :hey');
  expect(__('dolor.sit.amet', {hey: 'you'})).toEqual('dolor sit amet you');
});
