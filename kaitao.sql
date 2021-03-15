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

 Date: 15/03/2021 16:40:15
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `reader` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `file_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, '彩虹会掉色嘛', '7777', '淘宝装修店铺需要多少钱？有哪些技巧？', '装修经验', '在淘宝平台上开网店需要装修店铺，而且装修店铺并不是一成不变的，在报名参加大促活动的时候...', '5fdb011f33cc3.png');
INSERT INTO `article` VALUES (2, '彩虹会掉色吗', '8666', '淘宝滞销商品会影响店铺权重吗？', '店铺诊断', '商家运营淘宝店，都不想自己店铺有滞销商品，毕竟店铺出现滞销商品对店铺的影响还是比较大的...', '5fdafe690bc6f.jpg');
INSERT INTO `article` VALUES (3, '彩虹会掉色嘛', '6666', '淘宝动态评分低怎么提升？应该怎么做？', '运营策划', '淘宝店铺的动态评分太低的话，对店铺是有一定影响的。买家在淘宝购物的时候...', '5fdafd04a9e70.jpg');
INSERT INTO `article` VALUES (4, '彩虹会掉色嘛 ', '7777', '新手做淘宝客服难吗？客服要做哪些事？', '团队管理', '淘宝客服是个繁琐的工作，所以，很多新手开店时也在询问做客服难不难?为了解答大家的这疑问...', '5fdaf90870942.jpg');
INSERT INTO `article` VALUES (5, '彩虹会掉色嘛 ', '6666', '天猫和淘宝哪个权重好?', '淘宝推广', '天猫和淘宝是经常会被拿来对比的平台，对于商家而言这两个平台哪个权重高点...', '5fdaf7e54f4c9.jpg');
INSERT INTO `article` VALUES (6, '彩虹会掉色嘛 ', '8888', '怎么看自己淘宝好评率？淘宝好评率如何提升？', '运营策划', '淘宝商家很重视自己店铺的好评率，毕竟店铺好评多，对店铺肯定有好处，那么大家知道作为淘宝...', '5fdaf408f2bce.jpg');
INSERT INTO `article` VALUES (7, '彩虹会掉色嘛 ', '9999', '怎样提高淘宝店铺层级？快速提高店铺层级方法', '运营策划 ', '　我们知道针对商家而言，店铺层级越高，就说明淘宝店铺流量越多...', '5fdaf0de072ee.jpg');
INSERT INTO `article` VALUES (8, '彩虹会掉色嘛 ', '6666', '淘宝店铺主图的重要性是什么？具体分析', '网店SEO', '淘宝商家应该都知道，一个好的主图是能吸引用户点击的，许多商家也会对主图进行优化...', '5fdaef404c987.png');
INSERT INTO `article` VALUES (9, '彩虹会掉色嘛 ', '2333', '淘宝改标题被降权怎么办？怎么预防被降权？', '手机淘宝 ', '淘宝卖家们为了能够优化标题，因此也会对现有的标题进行调整和修改...', '5fdafa32ad7b2.jpg');
INSERT INTO `article` VALUES (10, '彩虹会掉色嘛 ', '8888', '淘宝单品被降权还可以刷吗？', '淘宝规程', '单品一旦违规就要被降权、扣分，这里说的违规是一个笼统的说法...', '5fdaf408f2bce.jpg');
INSERT INTO `article` VALUES (11, '彩虹会掉色嘛 ', '2333', '天猫和淘宝哪个权重好?', '淘宝推广', '天猫和淘宝是经常会被拿来对比的平台，对于商家而言这两个平台哪个权重高点...', '5fdaf7e54f4c9.jpg');

-- ----------------------------
-- Table structure for article_type
-- ----------------------------
DROP TABLE IF EXISTS `article_type`;
CREATE TABLE `article_type`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article_type
-- ----------------------------
INSERT INTO `article_type` VALUES (1, '装修经验');
INSERT INTO `article_type` VALUES (2, '店铺诊断');
INSERT INTO `article_type` VALUES (3, '运营策划');
INSERT INTO `article_type` VALUES (4, '团队管理');
INSERT INTO `article_type` VALUES (5, '淘宝推广');
INSERT INTO `article_type` VALUES (6, '运营策划');
INSERT INTO `article_type` VALUES (7, '网店SEO');
INSERT INTO `article_type` VALUES (8, '手机淘宝');
INSERT INTO `article_type` VALUES (9, '淘宝规程');

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES (1, 'o_1da8ctegq1c4omuqena5v2182v9.jpg', '拼多多直通车100%卡位成功技巧实操分享');
INSERT INTO `news` VALUES (2, 'o_1da6i69031kst1c18pkrlue1s7i9.png', '2020年淘宝做什么最赚钱?你最看好哪一行?');
INSERT INTO `news` VALUES (3, 'o_1da6i7i0b12tn12k21lev172v6i89.png', '淘宝淘外推广怎么使用?详细步骤分享');
INSERT INTO `news` VALUES (4, 'o_1da6i8tlnmj7177718021m5rd99.png', '淘宝宝贝排名不稳定怎么办?如何优化?');
INSERT INTO `news` VALUES (5, 'o_1da6ia1tkq3bt16124ms8vou39.png', '怎样写一个有搜索权重的标题?怎样找关键词?');

-- ----------------------------
-- Table structure for news_down
-- ----------------------------
DROP TABLE IF EXISTS `news_down`;
CREATE TABLE `news_down`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of news_down
-- ----------------------------
INSERT INTO `news_down` VALUES (1, '淘宝客推广');
INSERT INTO `news_down` VALUES (2, '生意参谋');
INSERT INTO `news_down` VALUES (3, '淘宝网店');
INSERT INTO `news_down` VALUES (4, '淘宝开店流程');
INSERT INTO `news_down` VALUES (5, '淘宝开店干货');
INSERT INTO `news_down` VALUES (6, '店铺优化技巧');
INSERT INTO `news_down` VALUES (7, '微选入驻');
INSERT INTO `news_down` VALUES (8, '淘宝直播');
INSERT INTO `news_down` VALUES (9, '手机刷单步骤');
INSERT INTO `news_down` VALUES (10, '网店SEO教程');
INSERT INTO `news_down` VALUES (11, '京东开店');
INSERT INTO `news_down` VALUES (12, '拼多多开店');
INSERT INTO `news_down` VALUES (13, '淘宝直通车推广');
INSERT INTO `news_down` VALUES (14, '微商货源');
INSERT INTO `news_down` VALUES (15, '排名无忧');
INSERT INTO `news_down` VALUES (16, '淘宝运营');
INSERT INTO `news_down` VALUES (17, '淘宝直播申请条件');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '123', 'admin');
INSERT INTO `user` VALUES (15, '123', 'root');
INSERT INTO `user` VALUES (16, '123', 'qwer');
INSERT INTO `user` VALUES (17, '123', 'zs');
INSERT INTO `user` VALUES (18, '123', 'wer');
INSERT INTO `user` VALUES (19, '111', '111');

SET FOREIGN_KEY_CHECKS = 1;
