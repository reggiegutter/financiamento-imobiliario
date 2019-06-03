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
        if (this._property.validity.rangeOverflow) this._setError(this._property, 'O valor máximo do imóvel nesta simulação é de 5 milhões');
        if (this._property.validity.rangeUnderflow) this._setError(this._property, 'Não existe imóvel negativo');
        if (this._property.validity.valueMissing) this._setError(this._property, 'Qual o valor do imóvel?');

        if (this._initialPayment.validity.rangeUnderflow) this._setError(this._initialPayment, 'O valor da entrada deve ser maior do que ZERO.');

        if (this._rate.validity.rangeUnderflow) this._setError(this._rate, 'O valor da taxa de juros cobrada deve ser maior do que ZERO.');
        if (this._rate.validity.valueMissing) this._setError(this._rate, 'Qual o valor da taxa de juros cobrada?');

        if (this._term.validity.rangeOverflow) this._setError(this._term, 'Para o seu bem, não seja um DEVEDOR por mais de 420 meses (35 anos!)');
        if (this._term.validity.rangeUnderflow) this._setError(this._term, 'O prazo mínimo do financiamento é de 100 meses.');
        if (this._term.validity.valueMissing) this._setError(this._term, 'Qual o prazo de financiamento?');

        if (this._insurancePrice.validity.rangeOverflow) this._setError(this._insurancePrice, 'Esse valor do seguro + taxas está muito alto. Valor máximo permitido: R$ 1.000,00.');
        if (this._insurancePrice.validity.rangeUnderflow) this._setError(this._insurancePrice, 'Qual o valor do seguro + taxas cobrado?');
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