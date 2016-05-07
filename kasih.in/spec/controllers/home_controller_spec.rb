require 'spec_helper'
require 'rails_helper'

describe HomeController, type: :controller do
  context 'Request page should success' do
    describe 'GET index' do
      before { get :index }
      it { is_expected.to respond_with 200 }
    end
    describe 'GET faq' do
      before { get :faq }
      it { is_expected.to respond_with 200 }
    end
  end
end
