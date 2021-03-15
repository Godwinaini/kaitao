/*
 Navicat Premium Data Transfer

 Source Server         : demo
 Source Server Type    : MySQL
 Source Server Version : 50731
 Source Host           : localhost:3306
 Source Schema         : kaitao

 Target Server Type    : MySQL
 Target Server Version : 50731
 File Encoding         : 65001

 Date: 22/12/2020 10:16:46
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `reader` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, '彩虹会掉色嘛', '8787', '淘宝装修店铺需要多少钱？有哪些技巧？', '装修经验', '在淘宝平台上开网店需要装修店铺，而且装修店铺并不是一成不变的，在报名参加大促活动的时候，');
INSERT INTO `article` VALUES (2, '彩虹会掉色吗', '8666', '淘宝滞销商品会影响店铺权重吗？', '店铺诊断', '商家运营淘宝店，都不想自己店铺有滞销商品，毕竟店铺出现滞销商品对店铺的影响还是比较大的');
INSERT INTO `article` VALUES (3, '彩虹会掉色嘛', '6666', '淘宝动态评分低怎么提升？应该怎么做？', '运营策划', '淘宝店铺的动态评分太低的话，对店铺是有一定影响的。买家在淘宝购物的时候');
INSERT INTO `article` VALUES (4, '彩虹会掉色嘛 ', '7777', '新手做淘宝客服难吗？客服要做哪些事？', '团队管理', '淘宝客服是个繁琐的工作，所以，很多新手开店时也在询问做客服难不难?为了解答大家的这疑问');
INSERT INTO `article` VALUES (5, '彩虹会掉色嘛 ', '6666', '天猫和淘宝哪个权重好?', '淘宝推广', '天猫和淘宝是经常会被拿来对比的平台，对于商家而言这两个平台哪个权重高点?');
INSERT INTO `article` VALUES (6, '彩虹会掉色嘛 ', '8888', '怎么看自己淘宝好评率？淘宝好评率如何提升？', '运营策划', '淘宝商家很重视自己店铺的好评率，毕竟店铺好评多，对店铺肯定有好处，那么大家知道作为淘宝');
INSERT INTO `article` VALUES (7, '彩虹会掉色嘛 ', '9999', '怎样提高淘宝店铺层级？快速提高店铺层级方法', '运营策划 ', '　我们知道针对商家而言，店铺层级越高，就说明淘宝店铺流量越多');
INSERT INTO `article` VALUES (8, '彩虹会掉色嘛 ', '6666', '淘宝店铺主图的重要性是什么？具体分析', '网店SEO', '淘宝商家应该都知道，一个好的主图是能吸引用户点击的，许多商家也会对主图进行优化。');
INSERT INTO `article` VALUES (9, '彩虹会掉色嘛 ', '2333', '淘宝改标题被降权怎么办？怎么预防被降权？', '手机淘宝 ', '淘宝卖家们为了能够优化标题，因此也会对现有的标题进行调整和修改');
INSERT INTO `article` VALUES (10, '彩虹会掉色嘛 ', '8888', '淘宝单品被降权还可以刷吗？', '淘宝规程', '单品一旦违规就要被降权、扣分，这里说的违规是一个笼统的说法');
INSERT INTO `article` VALUES (11, '彩虹会掉色嘛 ', '8888', '影响淘宝宝贝标题权重的因素是什么？', '店铺诊断', '淘宝宝贝标题在搜索中占据重要位置，所以，很多人也想知道宝贝标题权重的因素是什么?');

SET FOREIGN_KEY_CHECKS = 1;
