class FormController {

    constructor() {
        this._property = document.querySelector('#propertyValue')
        this._propertyAvaliation = document.querySelector('#propertyAvaliation')
        this._initialPayment = document.querySelector('#initialPayment')
        this._fgtsMonthly = document.querySelector('#fgtsMonthly')
        this._rate = document.querySelector('#rate')
        this._term = document.querySelector('#term')
        this._insurancePrice = document.querySelector('#insurancePrice')

        this._financing = new Financing()
        this._formInformationsView = new FormInformationsView()
        this._resultTableView = new ResultTableView()
        this._resultInformationsView = new ResultInformationsView()
        this._messageView = new MessageView()

        this.change();
    }

    change() {
        try {
            this._validateForm();
            this._messageView.update();
            this._setModel();
            this._formInformationsView.update(this._financing);
            this._resultTableView.update(this._financing);
            this._resultInformationsView.update(this._financing);
        } catch (e) {
            this._messageView.update(new Message(e.message, Message.DANGER));
        }
    }


    _validateForm() {
        if (this._property.validity.rangeOverflow) this._setError(this._property, 'Precisando de dinheiro para comprar um imóvel de mais de 5 milhões?');
        if (this._property.validity.rangeUnderflow) this._setError(this._property, 'Existe imóvel negativo? Quer que alguém te pague para levar o imóvel? Ainda quer financiar?');
        if (this._property.validity.valueMissing) this._setError(this._property, 'É MUITO IMPORTANTE para o cálculo que você informe o valor do imóvel que pretende adquirir.');

        if (this._initialPayment.validity.rangeUnderflow) this._setError(this._initialPayment, 'Ao invés de pagar a entrada, você quer receber uma entrada por comprar um imóvel? É isso mesmo?');

        if (this._rate.validity.rangeUnderflow) this._setError(this._rate, 'Até onde sei, banco no brasil não te empresta dinheiro com juros negativos. Se souber de algum, favor avisar!');
        if (this._rate.validity.valueMissing) this._setError(this._rate, 'Ainda não tenho o poder da premonição. Preciso que informe o valor da taxa de juros cobrada.');

        if (this._term.validity.rangeOverflow) this._setError(this._term, 'Para o seu bem, não seja um DEVEDOR por mais de 420 meses (35 anos!)');
        if (this._term.validity.rangeUnderflow) this._setError(this._term, 'Sério, qual o prazo mínimo de financiamento?');
        if (this._term.validity.valueMissing) this._setError(this._term, 'Por obséquio, favor preencher o Prazo do Financiamento. A diretoria agradece.');

        if (this._insurancePrice.validity.rangeOverflow) this._setError(this._insurancePrice, 'Pelo valor cobrado pelo seguro, o pé já está na cova.');
        if (this._insurancePrice.validity.rangeUnderflow) this._setError(this._insurancePrice, 'Desiste, nada é de graça. Pague o seguro.');
    }

    _setError(component, message) {
        component.focus();
        throw new Error(message);
    }

    _setModel() {
        this._financing.property = this._property.value;
        this._financing.initialPayment = this._initialPayment.value;
        this._financing.rate = this._rate.value;
        this._financing.term = this._term.value;
        this._financing.insurancePrice = this._insurancePrice.value;
        this._financing.calculate();
    }
}