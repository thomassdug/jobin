class ContactsController < ApplicationController
  before_action :set_contact, only: [:destroy, :edit, :update]

  def create
    @contact = Contact.new(contact_params)
    authorize @contact
    @apply = Apply.find(params[:apply_id])
    @contact.apply = @apply
    if @contact.save!
      redirect_to apply_path(@Contact.apply)
      else
        @display_modal = true
        render "pages/profile"
    end
  end

  def edit
    authorize @contact
  end

  def update
    @contact.update(contact_params)
    redirect_to apply_path(apply)
    authorize @contact
  end

  def destroy
    @contact.destroy
    redirect_to apply_path(apply)
    authorize @contact
  end

  private

  def set_contact
    @contact = Contact.find(params[:id])
  end

  def contact_params
    params.require(:contact).permit(:name, :linkedin_url)
  end
end
