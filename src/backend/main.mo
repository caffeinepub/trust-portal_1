import List "mo:core/List";
import Text "mo:core/Text";
import Order "mo:core/Order";

actor {
  let contactMessages = List.empty<(Text, Text, Text, Text)>();

  let contactInfo = {
    address = "123 Internet Computer Ave, Blockchain City";
    phone = "+1234567890";
    email = "info@greenstripe.com";
  };

  module ContactMessage {
    public func compareByName(msg1 : (Text, Text, Text, Text), msg2 : (Text, Text, Text, Text)) : Order.Order {
      Text.compare(msg1.0, msg2.0);
    };
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, subject : Text, message : Text) : async () {
    contactMessages.add((name, email, subject, message));
  };

  public query ({ caller }) func getContactInfo() : async (Text, Text, Text) {
    (contactInfo.address, contactInfo.phone, contactInfo.email);
  };

  public query ({ caller }) func getAllMessagesSortedByName() : async [(Text, Text, Text, Text)] {
    contactMessages.toArray().sort(ContactMessage.compareByName);
  };
};
