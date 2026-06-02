import { Then } from '@badeball/cypress-cucumber-preprocessor';
import page from '../../pages/consultaTransparencia.page';

Then('a página deve carregar com o título correto', () => {
  page.validarTitulo();
});