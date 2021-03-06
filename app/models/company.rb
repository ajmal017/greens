# == Schema Information
#
# Table name: companies
#
#  id          :bigint           not null, primary key
#  ticker      :string           not null
#  name        :string           not null
#  ceo         :string           not null
#  market_cap  :float            not null
#  employees   :integer
#  dividend    :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  about       :text             not null
#  founded     :integer          not null
#  headquarter :string           not null
#  pe_ratio    :float
#  avg_volume  :integer          not null
#

class Company < ApplicationRecord
    validates :ticker, :name, :ceo, :market_cap, :about, :founded, :headquarter, :avg_volume, presence: true
    validates :ticker, :name, uniqueness: true

    has_many :transactions
    has_many :watchlists
end
