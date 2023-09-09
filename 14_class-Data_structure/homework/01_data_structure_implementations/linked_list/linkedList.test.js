const { Node } = require("./Node");
const { LinkedList } = require("./LinkedList");

describe("Node class tests", () => {
  test("Expect node data to be 1", () => {
    const node = new Node(1);
    expect(node.data).toBe(1);
  });

  test("Expect node nextNode to be null", () => {
    const node = new Node(1);
    expect(node.nextNode).toBe(null);
  });

  test("Expect node.nextNode.data to be 2", () => {
    const node = new Node(1);
    node.nextNode = new Node(2);
    expect(node.nextNode.data).toBe(2);
  });

  test("Expect node.nextNode.nextNode to be null ", () => {
    const node = new Node(1);
    node.nextNode = new Node(2);
    expect(node.nextNode.nextNode).toBe(null);
  });

  test("Expect error if node.nextNode is not null or a Node ", () => {
    const node = new Node(1);
    expect(() =>
      (node.nextNode = undefined).toThrow("nextNode must be null or a Node")
    );
    expect(() =>
      (node.nextNode = 5).toThrow("nextNode must be null or a Node")
    );
  });
});

describe("LinkedList class tests", () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe("Testing insertFront method", () => {
    test("Expect to insert first element", () => {
      linkedList.insertFront(1);
      expect(linkedList.firstNode.data).toBe(1);
    });

    test("Expect to first element to be correct", () => {
      for (let i = 0; i < 5; i++) {
        linkedList.insertFront(i);
        expect(linkedList.firstNode.data).toBe(i);
      }
    });

    test("Expect to insert multiple data and expect order to be correct", () => {
      for (let i = 1; i < 6; i++) {
        linkedList.insertFront(i);
      }

      expect(linkedList.firstNode.data).toBe(5);
      expect(linkedList.firstNode.nextNode.data).toBe(4);
      expect(linkedList.firstNode.nextNode.nextNode.data).toBe(3);
      expect(linkedList.firstNode.nextNode.nextNode.nextNode.data).toBe(2);
      expect(
        linkedList.firstNode.nextNode.nextNode.nextNode.nextNode.data
      ).toBe(1);
      expect(
        linkedList.firstNode.nextNode.nextNode.nextNode.nextNode.nextNode
      ).toBe(null);

      expect(linkedList.getData()).toEqual([5, 4, 3, 2, 1]);
    });
  });
  describe("Testing insertRear method", () => {
    test("Expect to insert first element", () => {
      linkedList.insertRear(1);
      expect(linkedList.firstNode.data).toBe(1);
    });

    test("Expect to insert multiple data an expect order to be correct", () => {
      for (let i = 1; i < 6; i++) {
        linkedList.insertRear(i);
      }

      expect(linkedList.firstNode.data).toBe(1);
      expect(linkedList.firstNode.nextNode.data).toBe(2);
      expect(linkedList.firstNode.nextNode.nextNode.data).toBe(3);
      expect(linkedList.firstNode.nextNode.nextNode.nextNode.data).toBe(4);
      expect(
        linkedList.firstNode.nextNode.nextNode.nextNode.nextNode.data
      ).toBe(5);
      expect(
        linkedList.firstNode.nextNode.nextNode.nextNode.nextNode.nextNode
      ).toBe(null);

      expect(linkedList.getData()).toEqual([1, 2, 3, 4, 5]);
    });
  });
  describe("Testing insertAfter method", () => {
    test("Expect error if there is no after node", () => {
      const targetNode = 5;
      const dataToAdd = 100;

      expect(() => linkedList.insertAfter(targetNode, dataToAdd)).toThrow(
        "Node with this data is not present in the linked list."
      );

      linkedList.insertRear(1);
      linkedList.insertRear(2);
      linkedList.insertRear(3);
      linkedList.insertRear(4);

      expect(linkedList.getData()).toEqual([1, 2, 3, 4]);
      expect(() => linkedList.insertAfter(targetNode, dataToAdd)).toThrow(
        "Node with this data is not present in the linked list."
      );
    });

    test("Expect data to be inserted after target node", () => {
      linkedList.insertRear(1);
      linkedList.insertAfter(1, 2);
      expect(linkedList.firstNode.nextNode.data).toBe(2);
      linkedList.insertAfter(2, 3);
      expect(linkedList.firstNode.nextNode.nextNode.data).toBe(3);
      linkedList.insertAfter(3, 4);
      expect(linkedList.firstNode.nextNode.nextNode.nextNode.data).toBe(4);
      expect(linkedList.firstNode.nextNode.nextNode.nextNode.nextNode).toBe(
        null
      );

      linkedList.insertAfter(3, 0);
      expect(linkedList.firstNode.nextNode.nextNode.nextNode.data).toBe(0);
      expect(
        linkedList.firstNode.nextNode.nextNode.nextNode.nextNode.data
      ).toBe(4);
      expect(
        linkedList.firstNode.nextNode.nextNode.nextNode.nextNode.nextNode
      ).toBe(null);

      expect(linkedList.getData()).toEqual([1, 2, 3, 0, 4]);
    });
  });

  describe("Testing insertion using various methods at same time", () => {
    test("Expect data to be inserted in correct order", () => {
      expect(linkedList.getData()).toEqual([]);

      linkedList.insertFront(1); // list = [1]
      linkedList.insertRear(2); // list = [1, 2]
      linkedList.insertAfter(1, 3); // list = [1, 3, 2]
      linkedList.insertFront(4); // list = [4, 1, 3, 2]
      linkedList.insertAfter(4, 5); // list = [4, 5, 1, 3, 2]
      linkedList.insertAfter(2, 6); // list = [4, 5, 1, 3, 2, 6]
      linkedList.insertRear(7); // list = [4, 5, 1, 3, 2, 6, 7]
      linkedList.insertRear(8); // list = [4, 5, 1, 3, 2, 6, 7, 8]
      linkedList.insertAfter(1, 1); // list = [4, 5, 1, 1, 3, 2, 6, 7, 8]
      linkedList.insertAfter(1, 9); // list = [4, 5, 1, 9 1, 3, 2, 6, 7, 8]

      expect(linkedList.getData()).toEqual([4, 5, 1, 9, 1, 3, 2, 6, 7, 8]);
    });

    describe("Testing searchData method", () => {
      test("Expect data to not be found", () => {
        expect(() => linkedList.searchData(1)).toThrow(
          "Node with this data is not present in the linked list."
        );
        linkedList.insertRear(1);
        expect(() => linkedList.searchData(2)).toThrow(
          "Node with this data is not present in the linked list."
        );
      });

      test("Expect data to be found", () => {
        linkedList.insertRear(1);
        linkedList.insertRear(2);
        linkedList.insertRear(3);
        expect(linkedList.searchData(1).data).toBe(1);
        expect(linkedList.searchData(2).data).toBe(2);
        expect(linkedList.searchData(3).data).toBe(3);
      });
    });
  });

  describe("Tests for deleteFront method", () => {
    test("Expect node to be deleted and first node to be null if list is empty", () => {
      linkedList.deleteFront();
      expect(linkedList.firstNode).toBe(null);
      for (let i = 0; i < 4; i++) {
        linkedList.insertRear(i);
      }

      expect(linkedList.getData()).toEqual([0, 1, 2, 3]);
      linkedList.deleteFront();
      expect(linkedList.getData()).toEqual([1, 2, 3]);
      linkedList.deleteFront();
      expect(linkedList.getData()).toEqual([2, 3]);
      linkedList.deleteFront();
      expect(linkedList.getData()).toEqual([3]);
      linkedList.deleteFront();
      expect(linkedList.getData()).toEqual([]);
      linkedList.deleteFront();
      expect(linkedList.getData()).toEqual([]);
      linkedList.insertFront(1);
      expect(linkedList.getData()).toEqual([1]);
    });
  });

  describe("Tests for deleteRear method", () => {
    test("Expect node to be deleted and first node to be null if list is empty", () => {
      linkedList.deleteRear();
      expect(linkedList.firstNode).toBe(null);
      for (let i = 0; i < 4; i++) {
        linkedList.insertRear(i);
      }
      expect(linkedList.getData()).toEqual([0, 1, 2, 3]);
      linkedList.deleteRear();
      expect(linkedList.getData()).toEqual([0, 1, 2]);
      linkedList.deleteRear();
      expect(linkedList.getData()).toEqual([0, 1]);
      linkedList.deleteRear();
      expect(linkedList.getData()).toEqual([0]);
      linkedList.deleteRear();
      expect(linkedList.getData()).toEqual([]);
      linkedList.deleteRear();
      linkedList.insertRear(1);
      linkedList.deleteRear();
      expect(linkedList.firstNode).toBe(null);
    });
  });
});
